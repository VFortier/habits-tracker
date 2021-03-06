import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import AuthService from "../services/auth.service"

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    let email = this.state.email;
    let password = this.state.password;

    AuthService.login(email, password).then(
      () => {
        window.location.reload();
      },
      error => {
        if (error.response.status === 401) {
          this.setState({
            message: "The email and password you’ve entered doesn’t match any account",
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
          <h2>Login</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange} />
          </Form.Group>

          <p className="text-danger">
            {this.state.message}
          </p>
          
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;