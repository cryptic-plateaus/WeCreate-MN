import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../../components/DecorativeHeaders/HeaderThree/HeaderThree";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";

const styles = (theme) => ({
  root: {
    background: "linear-gradient(45deg, #fbbd41 60%, #fb9e41 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    fontWeight: "bold",
    margin: "10px",
    justify: "center",
  },
  textField: {
    width: 400,
    margin: "10px",
  },
});

const industries = [
  {
    value: "Dance",
    label: "Dance",
  },
  {
    value: "Design",
    label: "Design",
  },
  {
    value: "Visual Arts",
    label: "Visual Arts",
  },
  {
    value: "Music",
    label: "Music",
  },
  {
    value: "Theatre",
    label: "Theatre",
  },
];

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
    const { classes } = this.props;
    return (
      <div>
        <Header />
        {/* {JSON.stringify(this.state)} testing on-change */}
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <Fade bottom>
          <div className="form">
            <center>
              <form onSubmit={this.registerUser}>
                <h1>Register As An Employer</h1>
                <div>
                  <TextField
                    required
                    label="Username"
                    className={classes.textField}
                    name="organization-username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor("username")}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    required
                    label="Password"
                    className={classes.textField}
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor("password")}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    required
                    label="Organization Name"
                    className={classes.textField}
                    name="organization-name"
                    value={this.state.orgName}
                    onChange={this.handleInputChangeFor("orgName")}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    required
                    label="Organization Website"
                    className={classes.textField}
                    name="organization-website"
                    value={this.state.orgWebsite}
                    onChange={this.handleInputChangeFor("orgWebsite")}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    required
                    label="Name of Primary Contact"
                    className={classes.textField}
                    name="organization-contact-name"
                    value={this.state.nameOfContact}
                    onChange={this.handleInputChangeFor("nameOfContact")}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    required
                    label="Email of Primary Contact"
                    className={classes.textField}
                    name="organization-contact-email"
                    value={this.state.emailOfContact}
                    onChange={this.handleInputChangeFor("emailOfContact")}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    select
                    required
                    label="Organization Industry"
                    className={classes.textField}
                    name="organization-industry"
                    value={this.state.industry}
                    onChange={this.handleInputChangeFor("industry")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                  >
                    {industries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    required
                    label="Organization Size"
                    name="Organization Size"
                    value={this.state.orgSize}
                    onChange={this.handleInputChangeFor("orgSize")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                  />
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
            </center>
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
        </Fade>
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





