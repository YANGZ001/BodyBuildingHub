/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";

export default class Train extends React.Component {
  render() {
    return (
      <div>
        <VideoList type="trainVids" />
        <br />
        <VideoDetail />
      </div>
    );
  }
}
