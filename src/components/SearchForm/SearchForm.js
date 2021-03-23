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
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Type in the name of the employee to begin"
                    id="employee"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
        </button>
            </div>
        </form>
    );
}

export default SearchForm;
