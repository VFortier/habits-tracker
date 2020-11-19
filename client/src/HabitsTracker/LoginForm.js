import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

    axios
      .post("/user/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        alert(response.data);
      });
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

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;