/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import Statistics from "./Statistics.jsx"
import TrainLog from "./TrainLog.jsx"

const initialLogs = [
{
id: 1, type: "Barbell Deadleft", 
reps: "10", unit: "lb", 
note: "I feel good", 
created: new Date("2018-08-15"),
},
{
id: 2, type: "Pushup", 
reps: "10", unit: "",
note: "I can do more", 
created: new Date("2022-04-01"),
},
{
id: 3, type: "Pushup",
reps: "15", unit: "",
note: "Enough for today", 
created: new Date("2022-04-01"),
},
];

export default class Tracker extends React.Component {
	constructor() {
		super();
		this.state = { logs: [] };
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		setTimeout(() => {
				this.setState({ logs: initialLogs });
				}, 500);
	}

	render() {
		return (
				<div>
				This is a placeholder for Tracker component.
				<Statistics />
				<br />
				<div class="btn-group" role="group" aria-label="Basic mixed styles example">
					<button type="button" class="btn btn-success">Add</button>
					<button type="button" class="btn btn-warning">Edit</button>
					<button type="button" class="btn btn-danger">Delete</button>
				</div>
				<TrainLog logs={this.state.logs}/>
				</div>
			   );
	}
}

