/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';
import VideoList from './VideoList.jsx'
import VideoDetail from './VideoDetail.jsx'

export default class Diet extends React.Component {
  render() {
    return (
      <div>
			This is a placeholder for Diet component.

			<br/>
			<VideoList />
			<br/>
			<VideoDetail />

			</div>
    );
  }
}
