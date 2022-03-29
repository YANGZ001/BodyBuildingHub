/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class Train extends React.Component {
  render() {
    return (
      <div>
			This is a placeholder for Train component.

			<br/>
			<VideoList />
			<br/>
			<VideoDetail />
			</div>
    );
  }
}
