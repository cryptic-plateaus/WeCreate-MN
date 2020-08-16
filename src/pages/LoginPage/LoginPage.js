import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../../components/DecorativeHeaders/HeaderOne/HeaderOne";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


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
    width: 200,
    margin: "10px",
  },
});

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
    
    const { classes } = this.props;
   
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
              <TextField
                required
                label="Username"
                className={classes.textField}
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
              />
            </div>
            <div>
              <TextField
                required
                label="Password"
                className={classes.textField}
                type="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
                margin="normal"
              />
            </div>
            <div>
              <center>
                <Button
                  variant="contained"
                  className="log-in"
                  type="submit"
                  name="submit"
                  value="Log In"
                  className={classes.button}
                  classes={{ root: classes.root }}
                >
                  Login
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
            Register
          </button>
        </center>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(LoginPage));
