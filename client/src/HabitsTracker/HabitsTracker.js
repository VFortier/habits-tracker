import React, { Component } from 'react';

import HabitsLandingPage from './HabitsLandingPage';

class HabitsTracker extends Component {
  // TODO - Return the actual app if the user is already logged in
  render() {
    return (
      <>
          <HabitsLandingPage></HabitsLandingPage>
      </>
    );
  }
}

export default HabitsTracker;