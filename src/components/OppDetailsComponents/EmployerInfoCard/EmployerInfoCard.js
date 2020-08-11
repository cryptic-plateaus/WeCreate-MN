import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const cardStyle = {
  main: {
    display: 'block',
    width: '70%',
    color: 'black',
    background: '#f9f9f9',
    textAlign: 'left',
  }
}

class EmployerInfoCard extends Component {
  // state = {

  // };
  render() {
    const classes = this.props;
    return (
      <center>
        <Card style={cardStyle.main} className={classes.card} className="opportunity-post">
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Company Name
              </Typography>
              <Typography variant="subtitle1">
                Point of Contact
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Company Site
              </Typography>
            </CardContent>
          </div>
        </Card>
      </center>
    );
  }
}

EmployerInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(EmployerInfoCard));
