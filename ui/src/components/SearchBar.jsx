/* eslint "react/prefer-stateless-function": "off" */

import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            className="prompt"
            placeholder="Search videos..."
          />
          <i class="search icon"></i>
        </div>
      </div>
    );
  }
}
