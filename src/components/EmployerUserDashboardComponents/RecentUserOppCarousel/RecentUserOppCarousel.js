import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
// import {Paper} from '@material-ui/core';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import RecentUserOppPost from "../RecentUserOppPost/RecentUserOppPost";
import { connect } from 'react-redux';

const styles = (theme) => ({
  input: {
    display: "none",
  },
});

class RecentUserOppCarousel extends Component {
  // state = {
  //   id: "" //Needs to grab Employer ID based on logged-in user
  // }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id !== 
      prevProps.reduxState.orgInfo.id) {
        this.getOrganizationOpportunities();
    }
  }

  // componentDidMount = () => {
  //   // console.log("props:", this.props);
  //   this.getOrganizationOpportunities();
  //   // this.setState({
  //   //   id: this.props.orgId
  //   // })
  // };

  getOrganizationOpportunities = () => {
    console.log("org id from redux:", this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id)
    this.props.dispatch({
      type: "FETCH_ALL_USER_OPPORTUNITIES",
      payload: this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id
    });
    // console.log('TESTING STATE ID:', this.state.id);
  };

  render() {
    return (
      <>
      <h3>
          {/* {JSON.stringify(this.state)} */}
          {/* {JSON.stringify(this.props.orgId)}  */}
          {/* {JSON.stringify(this.props.reduxState.orgInfo.id)} */}
        <i>Your current opportunities:</i>
      </h3>
      <Carousel
        className="carousel"
        navButtonsAlwaysVisible={true}
        // next={(next, active) => {
        //   console.log(`we left ${active}, and are now at ${next}`);
        // }}
        // prev={(prev, active) => {
        //   console.log(`we left ${active}, and are now at ${prev}`);
        // }}
      >
        {/* ITEM IN CAROUSEL!!! */}
          {this.props.reduxState.employerUserOpps && this.props.reduxState.employerUserOpps.map((item) => {
            return (
              <div>
                <RecentUserOppPost 
                title={item.opp_title}
                type={item.opp_type}
                experience={item.experience_level}
                date={item.closing_date}
                key={item.id}
                id={item.id}/>
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
