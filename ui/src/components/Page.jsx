import React from 'react';

import Contents from './Contents.jsx';

function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      {' | '}
      <a href="/#/train">Train</a>
      {' | '}
      <a href="/#/diet">Diet</a>
      {' | '}
      <a href="/#/motivation">Motivation</a>
      {' | '}
      <a href="/#/tracker">Tracker</a>
    </nav>
  );
}

export default function Page() {
  return (
    <div>
			<h1>Welcome to the Body building hub!</h1>
			<br/>
      <NavBar />
      <Contents />
    </div>
  );
}

