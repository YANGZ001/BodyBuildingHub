/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics(props) {
	const logs = props.logs;
	const uniqueDays = new Set(logs.map(x => {
		var tmp = new Date(x.created).toLocaleDateString('en-US');
		console.log("tmp = " + tmp);
		//console.log("type of created = " + typeof tmp);
		return tmp;
		})).size;
	const uniqueTypes = new Set(logs.map(x => {
		return x.type;
		})).size;

	return (
      <div class="container">
				This is a placeholder for Statistics component.
				<div class="row">
					<div class="badge bg-primary text-wrap col" style={{"width": "6rem",}}>
						<p class="font-monospace">You have <span class="fs-2">{logs.length}</span> logs</p>
					</div>
					<div class="badge bg-primary text-wrap col" style={{"width": "6rem",}}>
						<p class="font-monospace">You have trained <span class="fs-2">{uniqueDays}</span> days</p>
					</div>
					<div class="badge bg-primary text-wrap col" style={{"width": "6rem",}}>
						<p class="font-monospace">You have trained <span class="fs-2">{uniqueTypes}</span> types</p>
					</div>
				</div>
			</div>
    );
}

