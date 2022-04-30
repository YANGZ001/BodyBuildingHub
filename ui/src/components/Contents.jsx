import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Diet from "./Diet.jsx";
import Motivation from "./Motivation.jsx";
import Tracker from "./Tracker.jsx";
import Train from "./Train.jsx";
import Home from "./Home.jsx";
import Setting from "./Setting.jsx";

/* Main contents. Here define router rules for HashRouter. */

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/diet" component={Diet} />
      <Route path="/motivation" component={Motivation} />
      <Route path="/tracker" component={Tracker} />
      <Route path="/train" component={Train} />
      <Route component={NotFound} />
    </Switch>
  );
}
