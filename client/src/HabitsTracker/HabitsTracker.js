import React, { Component } from 'react';

import LoginForm from './LoginForm';

class HabitsTracker extends Component {
  /* TODO - Delete me - dummy request
  componentDidMount() {
    axios.get('/user/dummy@user.com').then((res) => {
      const response = res.data.email;
      this.setState({response});
    });
  }*/

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