import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    background: 'linear-gradient(45deg, #d500f9 60%, #9e00c5 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontWeight: 'bold',
    margin: '10px'
  },
});

function SignUpButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="contained"
        href="#register"
        classes={{ root: classes.root }}
        className={classes.button}
      >
        Sign Up
      </Button>
    </div>
  );
}

SignUpButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpButton);
