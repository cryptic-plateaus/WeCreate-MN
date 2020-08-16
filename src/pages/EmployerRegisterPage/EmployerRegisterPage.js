import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../../components/DecorativeHeaders/HeaderThree/HeaderThree";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    background: 'linear-gradient(45deg, #fbbd41 60%, #fb9e41 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(251, 158, 65, .3)',
    fontWeight: 'bold',
    margin: "10px",
    justify: 'center'
  },
});

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
    orgName: "",
    orgWebsite: "",
    nameOfContact: "",
    emailOfContact: "",
    industry: "",
    orgSize: "",
  };

  registerUser = (event) => {
    event.preventDefault();

    if (
      this.state.username &&
      this.state.password &&
      this.state.orgName &&
      this.state.orgWebsite &&
      this.state.nameOfContact &&
      this.state.emailOfContact &&
      this.state.industry &&
      this.state.orgSize
    ) {
      this.props.dispatch({
        type: "REGISTER_EMPLOYER", //WAS 'REGISTER'
        payload: {
          username: this.state.username,
          password: this.state.password,
          orgName: this.state.orgName,
          orgWebsite: this.state.orgWebsite,
          nameOfContact: this.state.nameOfContact,
          emailOfContact: this.state.emailOfContact,
          industry: this.state.industry,
          orgSize: this.state.orgSize,
        },
      });
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleClick = (event) => {
    this.props.history.push("/login");
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header />
        {/* {JSON.stringify(this.state)} testing on-change */}
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <div className="form">
          <form onSubmit={this.registerUser}>
            <h1>Register As An Employer</h1>
            <div>
              <label htmlFor="organization-username">
                Username:
                <input
                  type="text"
                  name="organization-username"
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
              <label htmlFor="organization-name">
                Organization Name:
                <input
                  type="text"
                  name="organization-name"
                  value={this.state.orgName}
                  onChange={this.handleInputChangeFor("orgName")}
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
                  onChange={this.handleInputChangeFor("orgWebsite")}
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
                  onChange={this.handleInputChangeFor("nameOfContact")}
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
                  onChange={this.handleInputChangeFor("emailOfContact")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="organization-industry">
                Organization Industry:
                <select
                  type="text"
                  name="organization-industry"
                  value={this.state.industry}
                  onChange={this.handleInputChangeFor("industry")}>
                  <option value="Visual Arts">Visual Arts</option>
                  <option value="Design">Design</option>
                  <option value="Music">Music</option>
                  <option value="Theatre">Theatre</option>
                  <option value="Dance">Dance</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="organization-size">
                Company Size:
                <input
                  type="number"
                  name="organization-size"
                  value={this.state.orgSize}
                  onChange={this.handleInputChangeFor("orgSize")}
                />
              </label>
            </div>
            <div>
              <center>
                <Button
                  variant="contained"
                  className="register"
                  type="submit"
                  name="submit"
                  value="Register"
                  className={classes.button}
                  classes={{ root: classes.root }}
                >
                  Register
                </Button>
              </center>
            </div>
          </form>
        </div>
        <center>
          <button
            type="button"
            onClick={this.handleClick}
            className="link-button"
          >
            Login
            </button>
        </center>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(RegisterPage));





