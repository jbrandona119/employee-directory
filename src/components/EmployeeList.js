import React, { Component } from 'react';

class EmployeeList extends Component {
    render() {
        return (
            <table className="table">
                <thead className="employee-table">
                    <tr>

                    </tr>
                </thead>
                <tbody className="employee-data">
                    {this.props.users.map((employee, i) => {
                        return (
                            <tr className="results" key={i}>
                                <td>
                                    <img className="employee-image" src={employee.picture} alt="Employee" />
                                </td>
                                <td className="employee-name">
                                    {employee.name.first + " " + employee.name.last}
                                </td>
                                <td>
                                    {employee.email}
                                </td>
                                <td>
                                    {employee.phone}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

}
export default EmployeeList;