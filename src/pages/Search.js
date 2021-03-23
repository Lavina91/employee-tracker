import React, { Component } from 'react';
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults"
import API from "../utils/API"

class Search extends Component {
    state = {
        search: "",
        employees: [],
        results: []
    };


    // componentDidMount() {
    //     API.getData()
    //     .then(res => this.setState({ employees: res.data.results}) )
    //     .catch(err => console.log(err))
    // }


    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    }


    handleSearchFormSubmit = (event) => {
        event.preventDefault();
        API.getData()
        .then(res => this.setState({ results: res.data.results}))
        .catch(err => console.log(err))
    }

    handleSearchAllFormSubmit = (event) => {
        event.preventDefault();
        API.getData()
        .then(res => this.setState({ employees: res.data.results}))
        .catch(err => console.log(err))
    }









    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Search for an employee</h1>
                    <SearchForm
                        handleSearchFormSubmit={this.handleSearchFormSubmit}
                        handleSearchAllFormSubmit={this.handleSearchAllFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                    <SearchResults employees={this.state.employees} search={this.state.search} results={this.state.results}/>
                </Container>
            </div>
        )
    }
}

export default Search
