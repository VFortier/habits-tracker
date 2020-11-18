import React from 'react';
import axios from 'axios'

class SignupForm extends React.Component {
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
      <>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleEmailChange} />
          </label><br />
          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          </label><br />
          <label>
            Retype password:
            <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          </label><br />
          <input type="submit" value="Sign Up" />
        </form>
      </>
    );
  }
}

export default SignupForm;