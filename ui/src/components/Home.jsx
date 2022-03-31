/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import Statistics from "./Statistics.jsx";
import VideoList from "./VideoList.jsx";
import Setting from "./Setting.jsx";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p>This is a placeholder for Home component.</p>
        <Statistics />
        {/* <VideoList /> */}
        <Setting />
      </div>
    );
  }
}
