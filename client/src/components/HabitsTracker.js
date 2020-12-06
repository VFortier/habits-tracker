import React, { Component } from 'react';

import HabitsLandingPage from './HabitsLandingPage';
import AuthService from "../services/auth.service"

class HabitsTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  handleClickLogout() {
    AuthService.logout();
    window.location.reload();
  }

  render() {
    const currentUser = this.state.currentUser;

    return (
      <React.Fragment>
      	{!currentUser ? (
          <HabitsLandingPage></HabitsLandingPage>
        ) : (
          <div>
            <p>You are logged in </p>
            
            <input 
              type="button"
              value="logout"
              onClick={() => this.handleClickLogout()} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default HabitsTracker;