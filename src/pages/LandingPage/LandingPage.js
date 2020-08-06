import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoCard from "../../components/EmployerServicesInfoCard/EmployerServicesInfoCard";


class LandingPage extends Component {

    // this component doesn't do much to start, just renders some user info to the DOM
    render() {
        return (
          <>
            <div className="welcome">
              <img className="image" src="images/6.png" />
              <div className="message">
                <h1 className="title">WeCreate MN</h1>
                <h3 className="subtitle">
                  A place for Minnesota-based creatives of
                  <br />
                  color to find local, paid opportunities
                </h3>
              </div>
            </div>
            <div className="services">
              <h3 className="subtitle" id="services-title">
                Services
              </h3>
              <InfoCard />
            </div>
          </>
        );
    }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(LandingPage);
