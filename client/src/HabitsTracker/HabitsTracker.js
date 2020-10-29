import React, { Component } from 'react';
import axios from 'axios'

class HabitsTracker extends Component {
  state = {
    response: "No response"
  };
  
  componentDidMount() {
    axios.get('/user/dummy@user.com').then((res) => {
      const response = res.data.email;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="HabitsTracker">
        <h1>Hello from the frontend!</h1>
        <h1>{this.state.response}</h1>
      </div>
    );
  }
}

export default HabitsTracker;