import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

function SubmitNewOppButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button 
      variant="contained" 
      color="primary" 
      href=""
      className={classes.button}>
        Submit A New Opportunity
      </Button>
    </div>
  );
}

SubmitNewOppButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitNewOppButton);
