import React, { Component } from 'react';
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm"
import API from "../utils/API"

class Search extends Component {
    state = {
        name: "",
        cellPhoneNum: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        search: "",
        employees: "",
        results: []
    };


    // componentDidMount() {
    //     API.getData()
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }


    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    }


    handleFormSubmit = (event) => {
        event.preventDefault();
        API.getData(this.state.search)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }









    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Search for your employees</h1>
                    <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </Container>
            </div>
        )
    }
}

export default Search
