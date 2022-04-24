/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import Statistics from "./Statistics.jsx"
import TrainLog from "./TrainLog.jsx"
import graphQLFetch from './graphQLFetch.js';
import LogAdd from './LogAdd.jsx';

export default class Tracker extends React.Component {
	constructor() {
		super();
		this.state = { logs: [] };
		this.createLog = this.createLog.bind(this);
	}

	componentDidMount() {
		this.loadData();
	}

	async loadData() {
		const query = `query {
			logList {
				id type reps unit 
				note created
			}
		}`;

		const data = await graphQLFetch(query);
		if (data) {
			this.setState({ logs: data.logList });
		}
	}

	async createLog(log) {
		const query = `mutation logAdd($log: LogInputs!) {
			logAdd(log: $log) {
				id
			}
		}`;

		const data = await graphQLFetch(query, { log });
		if (data) {
			this.loadData();
		}
	}

	render() {
		return (
				<div>
				This is a placeholder for Tracker component.
				<Statistics />
				<br />
				<LogAdd createLog={this.createLog} />
				<TrainLog logs={this.state.logs}/>
				</div>
			   );
	}
}

