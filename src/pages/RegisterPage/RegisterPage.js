import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    orgName: '',
    orgWebsite: '',
    nameOfContact: '',
    emailOfContact: '',
    industry: '',
    orgSize: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) { //need to add other input items
      this.props.dispatch({
        type: 'REGISTER_EMPLOYER', //WAS 'REGISTER'
        payload: {
          username: this.state.username,
          password: this.state.password,

        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.state)} testing on-change */}
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register As An Employer</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
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
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="organization-name">
              Organization Name:
              <input
                type="text"
                name="organization-name"
                value={this.state.orgName}
                onChange={this.handleInputChangeFor('orgName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="organization-website">
              Organization Website:
              <input
                type="text"
                name="organization-website"
                value={this.state.orgWebsite}
                onChange={this.handleInputChangeFor('orgWebsite')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="organization-contact-name">
              Name of Organization Contact:
              <input
                type="text"
                name="organization-contact-name"
                value={this.state.nameOfContact}
                onChange={this.handleInputChangeFor('nameOfContact')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="organization-contact-email">
              Email of Organization Contact:
              <input
                type="text"
                name="organization-contact-email"
                value={this.state.emailOfContact}
                onChange={this.handleInputChangeFor('emailOfContact')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="organization-industry">
              Organization Industry:
              <input
                type="text"
                name="organization-industry"
                value={this.state.industry}
                onChange={this.handleInputChangeFor('industry')}
              />
            </label>
          </div>
          {/* 

      companySize: '' */}
          <div>
            <label htmlFor="organization-size">
              Company Size:
                <input
                type="number"
                name="organization-size"
                value={this.state.orgSize}
                onChange={this.handleInputChangeFor('orgSize')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Create a Profile"
            />
          </div>
        </form>
        {/* <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center> */}
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

export default connect(mapStateToProps)(RegisterPage);

