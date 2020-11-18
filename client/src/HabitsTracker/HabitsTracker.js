import React, { Component } from 'react';

import LoginForm from './LoginForm';

class HabitsTracker extends Component {
  render() {
    return (
      <>
          <h1>Habits Tracker Login</h1>
          <LoginForm></LoginForm>
      </>
    );
  }
}

export default HabitsTracker;