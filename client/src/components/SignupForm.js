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
      message: '',
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

    AuthService.signup(nickname, email, password).then(
      () => {
        // TODO - Login user upon successful signup
        window.location.reload();
      },
      error => {
        let errType = error.response.data.errType;

        if (error.response.status === 400 && errType === "EMAIL_ALREADY_EXISTS") {
          this.setState({
            message: "This email is already used by another account",
          });
        } else if (error.response.status === 400 && errType === "INVALID_REQUEST") {
          // This is more of a fallback and shouldn't be executed.
          // If invalid information is provided, the request to create an account shouldn't be sent by the frontend
          // in the first place.
          this.setState({
            message: "Invalid information provided to create the account",
          });
        } else if (error.response.status === 500) {
          this.setState({
            message: "Technical error, please try again later",
          });
        } else {
          this.setState({
            message: error.toString(),
          });
        }
      }
    );

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
          
          <p className="text-danger">
            {this.state.message}
          </p>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default SignupForm;