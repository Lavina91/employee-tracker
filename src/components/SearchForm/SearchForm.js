import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employee"
                    type="text"
                    className="form-control"
                    placeholder="Type in the first and last name of the employee"
                    id="employee"
                />
                <button type="submit" onClick={props.handleSearchFormSubmit} className="btn btn-success searchOne">
                    Search
        </button>
                <button type="submit" onClick={props.handleSearchAllFormSubmit} className="btn btn-success searchAll">
                    Search All
        </button>
            </div>
        </form>
    );
}

export default SearchForm;
