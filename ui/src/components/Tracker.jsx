/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';
import Statistics from './Statistics.jsx'
import TrainLog from './TrainLog.jsx'

export default class Tracker extends React.Component {
  render() {
    return (
      <div>
				This is a placeholder for Tracker component.
				<br />
				<button>add</button>
				<br />
				<button>Delete</button>
				<br />
				<Statistics />
				<br />
				<TrainLog />
			</div>
    );
  }
}
