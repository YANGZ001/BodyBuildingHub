/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";

function Diet() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <VideoList type="dietVids" />
      <br />
      <VideoDetail />
    </div>
  );
}

export default Diet;
