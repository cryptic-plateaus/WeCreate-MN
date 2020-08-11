import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ServicesInfoCarousel from "../../components/LandingPageComponents/ServicesInfoCarousel/ServicesInfoCarousel";
import SeeOpportunitiesButton from "../../components/AllButtons/SeeOpportunitiesButton/SeeOpportunitiesButton";
import SignUpButton from "../../components/AllButtons/GoToRegisterButton/GoToRegisterButton";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  // const { classes } = props;
  return (
    <>
      <center>
        <div className="welcome">
          <img className="image" src="images/6.png" />
          <div className="message">
            <h1 className="title">WeCreate MN</h1>
            <h3 className="subtitle">
              A place for Minnesota-based creatives of
              <br />
              color to find local, paid opportunities
            </h3>
            <SeeOpportunitiesButton />
            <SignUpButton />
          </div>
        </div>
        <div className="services">
          <h3 className="subtitle" id="services-title">
            Services
          </h3>
          <ServicesInfoCarousel/>
        </div>
      </center>
    </>
  );
    }
  
export default withStyles(styles)(ContainedButtons);
