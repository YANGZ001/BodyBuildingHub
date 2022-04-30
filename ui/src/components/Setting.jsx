/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";

export default function Setting() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <p> This is a placeholder for Setting component.</p>
      <p> This page allows user to change their username, password. </p>
      <pre>{JSON.stringify(user)}</pre>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">
          Submit
        </button>
        <button type="button" class="btn btn-outline-primary">
          Cancel
        </button>
      </div>
    </div>
  );
}
