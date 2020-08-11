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

class OppInfoCard extends Component {
  state = {
    title: this.props.title,
    type: this.props.type,
    experience: this.props.experience,
    date: this.props.date
  };
  render() {
    const classes = this.props;
    return (
      <center>
        <Card style={cardStyle.main} className={classes.card} className="opportunity-post">
          <div className={classes.details}>
              <CardContent className={classes.content}>
                  <center>
                    <Typography className="opp-text-details-1" component="h6" variant="h6">
                      Experience Level
                    </Typography>
                    <Typography className="opp-text-details-1" component="h6" variant="h6">
                      Opp Type
                    </Typography>
                    <Typography className="opp-text-details-1" component="h6" variant="h6">
                      Compensation
                    </Typography>
                  </center>
              </CardContent>
          </div>
        </Card>
      </center>
    );
  }
}

OppInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(OppInfoCard));
