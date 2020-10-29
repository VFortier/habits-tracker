import React from 'react';

import DevIntro from "./DevIntro"

import './Body.css';

import Container from 'react-bootstrap/Container'

function Body() {
  return (
    <Container className="Body">
      <DevIntro></DevIntro>
    </Container>
  );
}

export default Body;
