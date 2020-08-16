import React from 'react';
import Carousel from 'react-material-ui-carousel';
import EmployerInfo from "../EmployerServicesInfoCard/EmployerServicesInfoCard";
import JobSeekerInfo from "../JobSeekerServicesInfoCard/JobSeekerServicesInfoCard";

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

export default ServicesInfoCarousel;
