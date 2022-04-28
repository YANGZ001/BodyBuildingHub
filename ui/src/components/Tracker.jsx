/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import Statistics from "./Statistics.jsx"
import TrainLog from "./TrainLog.jsx"
import graphQLFetch from './graphQLFetch.js';
import LogAdd from './LogAdd.jsx';
import LogDelete from './LogDelete.jsx';

export default class Tracker extends React.Component {
	constructor() {
		super();
		this.state = { 
			logs: [],
			display: 1,
			};
		this.createLog = this.createLog.bind(this);
		this.deleteLog = this.deleteLog.bind(this);
	}

	componentDidMount() {
		this.loadData();
	}

	async loadData() {
		const query = `query {
			logList {
				id type reps number unit 
				note created
			}
		}`;

		const data = await graphQLFetch(query);
		if (data) {
			this.setState({ logs: data.logList });
		}
	}

	async deleteLog(id) {
		const query = `mutation logDelete($id: Int!) {
			logDelete(id: $id)
		}`;
		console.log("sent deletelog id = " + id);

		const data = await graphQLFetch(query, { id });
		if (data) {
			this.loadData();
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

	setDisplay(val) {
		this.setState({display : val});
	}

	render() {
		return (
				<div>
				<Statistics logs={this.state.logs}/>
				<br />
				<div class="row justify-content-evenly">
					<button type="button" class="btn btn-success col-4" onClick={()=>this.setDisplay(1)} >Add log</button>
					<button type="button" class="btn btn-danger col-4" onClick={()=>this.setDisplay(3)} >Delete log</button>
				</div>
				{this.state.display == 1 && (<LogAdd createLog={this.createLog}/>)}
				{this.state.display == 3 && (<LogDelete deleteLog={this.deleteLog}/>)}
				<TrainLog logs={this.state.logs}/>
				</div>
			   );
	}
}

