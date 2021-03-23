import React from 'react';
import { Table } from "react-bootstrap"
import "./SearchResults.css"

function SearchResults(props) {
    return (
      <>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>DOB</th>
                <th>Cell Phone #</th>
                <th>Email Address</th>
            </tr>
        </thead>
       
                {props.employees.map(employee => (
                    <>
                <tbody key={employee}>
                    <tr >
                        <td>{`${employee.name.first} ${employee.name.last}`}</td>
                        <td>{employee.dob.age}</td>
                        <td>{employee.dob.date}</td>
                        <td>{employee.cell}</td>
                        <td>{employee.email}</td>
                    </tr>
                </ tbody>
                    </>
                ))}
        
    </Table>
</>
    )
}

export default SearchResults
