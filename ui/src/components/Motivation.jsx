/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";

function Motivation() {
  return (
    <div>
      <VideoList type="motiVids" />
      <br />
      <VideoDetail />
    </div>
  );
}

export default Motivation;
