import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  button: {
    // margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

function UpdateProfileButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button 
      variant="contained" 
      color="primary" 
      href=""
      className={classes.button}>
        Update Profile
      </Button>
    </div>
  );
}

UpdateProfileButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateProfileButton);
