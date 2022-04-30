/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";
/* Diet page */

function Diet() {
  return (
    <div>
      <VideoList type="dietVids" />
      <br />
      <VideoDetail />
    </div>
  );
}

export default Diet;
