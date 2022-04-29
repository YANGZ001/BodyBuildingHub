/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

function Motivation() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <VideoList type="motiVids" />
      <br />
      <VideoDetail />
    </div>
  );
}

export default Motivation;
