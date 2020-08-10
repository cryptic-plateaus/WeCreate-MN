import React from 'react';
import Carousel from 'react-material-ui-carousel';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import EmployerInfo from "../EmployerServicesInfoCard/EmployerServicesInfoCard";
import JobSeekerInfo from "../JobSeekerServicesInfoCard/JobSeekerServicesInfoCard";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

class ServicesInfoCarousel extends React.Component {
  render() {
    return (
      <>
        <Carousel
          className="landing-carousel"
          navButtonsAlwaysVisible={true}
          next={(next, active) => {
            console.log(`we left ${active}, and are now at ${next}`);
          }}
          prev={(prev, active) => {
            console.log(`we left ${active}, and are now at ${prev}`);
          }}
        >
          <JobSeekerInfo />
          <EmployerInfo />
        </Carousel>
      </>
    );
  }
}

ServicesInfoCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesInfoCarousel);
