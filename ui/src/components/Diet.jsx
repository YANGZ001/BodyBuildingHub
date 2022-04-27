/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";
import SearchBar from "./SearchBar.jsx";

export default class Diet extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        This is a placeholder for Diet component.
        <br />
        <VideoList type="dietVids" />
        <br />
        <VideoDetail />
      </div>
    );
  }
}
