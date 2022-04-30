/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";

/* Train component to display training videos */

export default function Train() {
  return (
    <div>
      <VideoList type="trainVids" />
      <br />
      <VideoDetail />
    </div>
  );
}
