/* eslint "react/prefer-stateless-function": "off" */

import React, { useContext } from "react";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";
import { UserContext } from "./UserContext.jsx";
import { loginBBH } from "../utils/loginBBH.jsx";

export default function Train() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            // call logout to server OR cheat:
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await loginBBH();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
      <VideoList type="trainVids" />
      <br />
      <VideoDetail />
    </div>
  );
}
