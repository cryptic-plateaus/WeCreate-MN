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

function ApplyToOppButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button 
      variant="contained" 
      color="primary" 
      href="#opportunities"
      className={classes.button}>
        Delete Opportunity
      </Button>
    </div>
  );
}

ApplyToOppButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplyToOppButton);
