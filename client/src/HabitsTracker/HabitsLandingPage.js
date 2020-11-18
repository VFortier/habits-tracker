import React, { Component } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class HabitsLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginMode: 1,
    }
  }

  handleClickSwitch() {
    this.setState({
      isLoginMode: !this.state.isLoginMode,
    });
  }

  render() {

    let form = null;
    let switchLoginModeMsg = null;
    let switchLoginModeBtn = null;

    if (this.state.isLoginMode) {
      form = <LoginForm></LoginForm>;
      switchLoginModeMsg = "You don't have an account yet?"
      switchLoginModeBtn = "Sign Up";
    } else {
      form = <SignupForm></SignupForm>;
      switchLoginModeMsg = "Already have an account?"
      switchLoginModeBtn = "Login";
    }

    return (
      <>
        <h1>Habits Tracker</h1>
        {form}
        <hr />
        <p>{switchLoginModeMsg}</p>
        <input 
          type="button"
          value={switchLoginModeBtn}
          onClick={() => this.handleClickSwitch()} />
      </>
    );
  }
}

export default HabitsLandingPage;