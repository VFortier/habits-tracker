import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap';

import Frontpage from './Frontpage/Frontpage';
import HabitsTracker from './HabitsTracker/HabitsTracker';

import './App.css';

export default function App() {
  return (
    <Container fluid="xl" class="bg-dark text-light no-padding">
      <Router>
          <Switch>
            <Route path="/habits-tracker">
              <HabitsTracker />
            </Route>
            <Route path="/">
              <Frontpage />
            </Route>
          </Switch>
      </Router>
    </Container>
  );
}