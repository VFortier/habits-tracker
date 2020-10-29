import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Frontpage from './Frontpage/Frontpage';
import HabitsTracker from './HabitsTracker/HabitsTracker';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/habits-tracker">
            <HabitsTracker />
          </Route>
          <Route path="/">
            <Frontpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}