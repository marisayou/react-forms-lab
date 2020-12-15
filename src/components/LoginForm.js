import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameInput = (e) => { 
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordInput = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleFormOnSubmit = (e) => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username.length > 0 && password.length > 0) {
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormOnSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordInput}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
