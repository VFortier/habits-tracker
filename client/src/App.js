import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap';

import HabitsTracker from './HabitsTracker/HabitsTracker';

import './App.css';

export default function App() {
  return (
    <Container fluid="xl" class-name="bg-dark text-light no-padding">
      <Router>
          <Switch>
            <Route path="/">
              <HabitsTracker />
            </Route>
          </Switch>
      </Router>
    </Container>
  );
}