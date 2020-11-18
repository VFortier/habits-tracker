import React, { Component } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class HabitsLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginMode: 0,
    }
  }

  render() {

    let form = null;
    if (this.state.isLoginMode) {
      form = <LoginForm></LoginForm>;
    } else {
      form = <SignupForm></SignupForm>;
    }

    return (
      <>
          <h1>Habits Tracker Login</h1>
          {form}
      </>
    );
  }
}

export default HabitsLandingPage;