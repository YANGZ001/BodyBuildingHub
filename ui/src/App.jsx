import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Page from './components/Page.jsx';
/* Entry point for the project. React HashRouter is integrited here. */

const element = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}

