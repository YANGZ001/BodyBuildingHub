/* eslint "react/prefer-stateless-function": "off" */

import React from "react";

export default class Setting extends React.Component {
  render() {
    return (
      <div>
				<p> This is a placeholder for Setting component.</p>
				<p> This page allows user to change their username, password. </p>
				<div class="btn-group" role="group" aria-label="Basic outlined example">
					<button type="button" class="btn btn-outline-primary">Submit</button>
					<button type="button" class="btn btn-outline-primary">Cancel</button>
				</div>
			</div>
    );
  }
}
