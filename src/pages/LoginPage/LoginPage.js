import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../../components/DecoHeaderOne/DecoHeaderOne";
import LoginButton from "../../components/buttons/LoginButton/LoginButton";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleClick = (event) => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.loginMessage}
          </h2>
        )}
        <div className="form">
          <form onSubmit={this.login}>
            <h1>Login</h1>
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor("username")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </label>
            </div>
            <div>
              <input
                className="log-in"
                type="submit"
                name="submit"
                value="Log In"
              />
            </div>
          </form>
        </div>
        <center>
          <button
            type="button"
            onClick={this.handleClick}
            className="link-button"
          >
            Register
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
