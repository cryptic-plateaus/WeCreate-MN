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



class OpportunityPost extends Component {
  state = {
    title: this.props.title,
    date: this.props.date
  };
  render() {
    const classes = this.props;
    return (
      <Card className={classes.card} className="opportunity-post">
        <CardMedia
          className={classes.cover}
          image="/static/images/cards/live-from-space.jpg" //need to be retreived from database
          title="Live from space album cover" //orgname + logo here
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {this.state.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {this.state.date}
            </Typography>
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
          </CardContent>
          <div className={classes.controls}></div>
        </div>
      </Card>
    );
  }
}

OpportunityPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(OpportunityPost));
