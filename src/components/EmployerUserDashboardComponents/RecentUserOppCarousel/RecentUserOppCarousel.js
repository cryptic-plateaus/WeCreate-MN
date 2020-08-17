import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
// import {Paper} from '@material-ui/core';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import RecentUserOppPost from "../RecentUserOppPost/RecentUserOppPost";
import { connect } from 'react-redux';

const styles = (theme) => ({
  main: {
    height: "300px",
  },
});

class RecentUserOppCarousel extends Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id !== 
      prevProps.reduxState.orgInfo.id) {
        this.getOrganizationOpportunities();
    }
  }

  getOrganizationOpportunities = () => {
    console.log("org id from redux:", this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id)
    this.props.dispatch({
      type: "FETCH_ALL_USER_OPPORTUNITIES",
      payload: this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id
    });
  };

  render() {
    return (
      <>
        <Carousel
          className="carousel"
          navButtonsAlwaysVisible={true}
          style={styles.main}
        >
          {/* ITEM IN CAROUSEL!!! */}
          {this.props.reduxState.employerUserOpps &&
            this.props.reduxState.employerUserOpps.map((item) => {
              return (
                <div>
                  <RecentUserOppPost
                    title={item.opp_title}
                    type={item.opp_type}
                    experience={item.experience_level}
                    date={item.closing_date}
                    key={item.id}
                    id={item.id}
                  />
                </div>
              );
            })}
        </Carousel>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(withStyles(styles)(RecentUserOppCarousel));
