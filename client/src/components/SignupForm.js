import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import AuthService from "../services/auth.service"

class SignupForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      nickname: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleNicknameChange(event) {
    this.setState({nickname: event.target.value});
  }

  handleSubmit(event) {
    let email = this.state.email;
    let password = this.state.password;
    let nickname = this.state.nickname;

    AuthService.signup(nickname, email, password);

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="Nickname"
              placeholder="Enter nickname"
              value={this.state.nickname}
              onChange={this.handleNicknameChange} />
            <Form.Text className="text-muted">
              This nickname will only displayed to you.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange} />
          </Form.Group>

          <Form.Group controlId="formBasicRetypePassword">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default SignupForm;