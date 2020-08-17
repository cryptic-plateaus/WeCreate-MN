import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import "./FooterTwo.css";

const styles = {
  root: {
    background: "linear-gradient(45deg, #6633ff 30%, #6600cc 90%)",
    color: "white",
    marginTop: "50px",
  },
  info: {
    marginLeft: "57%",
  },
  name: {
    color: "white",
  },
  padding: {
    paddingTop: "30px",
    paddingBottom: "30px",
  },
};

function Footer (props) {
  const { classes } = props;
  const home = props => <RouterLink to="/" {...props} />

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        classes={{
          root: classes.root,
        }}
      >
        <Toolbar
          classes={{
            root: classes.padding,
          }}
        >
          <center>
            <div>
              <div id="logo-parts">
                <img
                  href="/"
                  src="images/WeCreateMN_logo.png"
                  alt="WeCreate Logo: Colorful Dots"
                  width="13%"
                ></img>
              </div>
              <div>
                <img
                  className="social-icon"
                  width="25"
                  alt="Instagram Logo"
                  src="images/insta_logo.png"
                />
                <img
                  className="social-icon"
                  width="25"
                  alt="Twitter Logoo"
                  src="images/twitter-logo.png"
                />
                <img
                  className="social-icon"
                  width="25"
                  alt="Facebook Logo"
                  src="images/facebook-logo.png"
                />
              </div>
            </div>
          </center>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default withStyles(styles)(connect(mapStateToProps)(Footer));

