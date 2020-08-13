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
  state = {
    id: 9, //Needs to grab Employer ID based on logged-in user
  }

  componentDidMount = () => {
    this.getOrganizationOpportunities();
  };

  getOrganizationOpportunities = () => {
    this.props.dispatch({
      type: "FETCH_ALL_USER_OPPORTUNITIES",
      payload: this.state.id
    });
    console.log('TESTING STATE ID:', this.state.id);
  };

  render() {
    return (
      <>
      <h3>
        <i>Your current opportunities:</i>
      </h3>
      <Carousel
        className="carousel"
        navButtonsAlwaysVisible={true}
        next={(next, active) => {
          console.log(`we left ${active}, and are now at ${next}`);
        }}
        prev={(prev, active) => {
          console.log(`we left ${active}, and are now at ${prev}`);
        }}
      >
        {/* ITEM IN CAROUSEL!!! */}
          <h1>hey</h1>
          {/* {this.props.employerUserOpps && this.props.employerUserOpps.map((item) => {
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
          })} */}
      </Carousel>
      </>
    );
  }
}

// RecentUserOppCarousel.propTypes = {
//   // classes: PropTypes.object.isRequired,
// };

const mapStateToProps = (reduxState) => ({
  employerUserOpps: reduxState.employerUserOpps,
});

export default connect(mapStateToProps)(withStyles(styles)(RecentUserOppCarousel));
