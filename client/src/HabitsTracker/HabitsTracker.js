import React, { Component } from 'react';

import LoginForm from './LoginForm';

class HabitsTracker extends Component {
  render() {
    return (
      <div className="HabitsTracker">
        <h1>Habits Tracker Login</h1>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default HabitsTracker;