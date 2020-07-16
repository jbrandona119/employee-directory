import React from "react";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import getUsers from "../utils/API.js";

// container gets data from the getUsers API and renders it in child
class Container extends React.Component {
    state = {
        users: [],
        filteredUsers: []
    }

    // component mounts when it is created and first inserted into the DOM 

    componentDidMount() {
        getUsers().then((res) => {
            this.setState({ users: res.data.results, filteredUsers: res.data.results })
        })
    }

    //function that checks if the property being searched for is included in the array
    search = (term) => {
        const filteredEmployees = this.state.users.filter((employee) => {
            if (employee.cell.includes(term) || (employee.name.first + " " + employee.name.last).includes(term) || employee.email.includes(term)) {
                return employee
            } else {
                return null;
            }
        });
        //passing object to the state of the component to update it
        this.setState({ filteredUsers: filteredEmployees });
    }
    // render thee components to the dom using props
    render() {
        return (
            <div>
                <Header search={this.search} />
                <EmployeeList users={this.state.filteredUsers} />
            </div>
        )
    }
}

export default Container;