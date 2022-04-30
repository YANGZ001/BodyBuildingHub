/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

/* Search Bar function definition. Search query will go to MongoDB backend. Note that the search is case-sensitive and common stop words will be ignored. */

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.search;
    const searchText = form.searchText.value;
    console.log("searchBar Text = " + searchText);
    const { searchVids } = this.props;
    searchVids(searchText);
  }

  render() {
    return (
      <form name="search" onSubmit={this.handleSubmit}>
        <center>
          <div className="ui search">
            <div className="ui icon input">
              <input
                type="text"
                className="prompt"
                placeholder="Search videos..."
                name="searchText"
              />
              <i className="search icon"></i>
            </div>
          </div>
        </center>
      </form>
    );
  }
}
