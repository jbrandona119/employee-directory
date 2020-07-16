import React from 'react';

function Header(props) {
    return (
        <div>
            <div className="jumbotron-fluid">
                <div className="header-container">
                    <div className="content">
                        <h1 className="display">Employee Directory</h1>
                        <h3 className="header-desc">Search and View Employees</h3>
                    </div>
                </div>
            </div>
            <form className="form-container">
                <div className="form-group">
                    <label>Search By Name:<br></br></label>
                    <input className="form-control" id="FormControl1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Search By Email:<br></br></label>
                    <input className="form-control" id="FormControl1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Search By Phone Number:<br></br></label>
                    <input className="form-control" id="FormControl1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
            </form>
        </div>
    )
}
export default Header