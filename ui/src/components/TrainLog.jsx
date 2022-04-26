/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';

function LogRow(props) {
	const log = props.log;
	return (
			<tr>
			<td>{log.id}</td>
			<td>{log.type}</td>
			<td>{log.reps}</td>
			<td>{log.number}</td>
			<td>{log.unit}</td>
			<td>{log.note}</td>
			<td>{log.created.toDateString()}</td>
			</tr>
			);
}

export default function TrainLog(props) {
	const logRows = props.logs.map(log =>
			<LogRow key={log.id} log={log} />
			);

	return (
			<div>
			<p> This is a placeholder for TrainLog component. </p>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Type</th>
						<th>Reps</th>
						<th>Number</th>
						<th>Unit</th>
						<th>Note</th>
						<th>Created Date</th>
					</tr>
				</thead>
				<tbody>
					{logRows}
				</tbody>
			</table>
			</div>
		   );
}
