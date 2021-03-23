import React from 'react';
import { Table } from "react-bootstrap"
import "./SearchResults.css"

function SearchResults(props) {
    console.log(props.search)
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
                <tbody  >
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

                {props.results.filter(result => result.name.first = props.search).map(filteredResult => (
                    <>
                        <tbody  >
                            <tr >
                                <td>{`${filteredResult.name.first} ${filteredResult.name.last}`}</td>
                                <td>{filteredResult.dob.age}</td>
                                <td>{filteredResult.dob.date}</td>
                                <td>{filteredResult.cell}</td>
                                <td>{filteredResult.email}</td>
                            </tr>
                        </ tbody>
                    </>
                ))}
        
    </Table>
</>
    )
}

export default SearchResults
