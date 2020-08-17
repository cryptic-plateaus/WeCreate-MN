import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoToSubmitOppButton from "../../components/AllButtons/GoToSubmitOppButton/GoToSubmitOppButton";
import Header from "../../components/DecorativeHeaders/HeaderTwo/HeaderTwo";
import RecentUserOpps from "../../components/EmployerUserDashboardComponents/RecentUserOppCarousel/RecentUserOppCarousel";

class UserDashboardPage extends Component {
  componentDidMount = () => {
    console.log("org id:", this.props.reduxState.orgInfo.id);
    this.getOrganizationDetails();
  };

  getOrganizationDetails = () => {
    this.props.dispatch({
      type: "FETCH_ORGANIZATION_DETAILS",
      payload: this.props.reduxState.user.id,
    });
    console.log("TESTING USER:", this.props.reduxState.user.id);
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.reduxState.orgInfo &&
      this.props.reduxState.orgInfo.id !== prevProps.reduxState.orgInfo.id
    ) {
      this.getOrganizationOpportunities();
    }
  }

  getOrganizationOpportunities = () => {
    console.log(
      "org id from redux:",
      this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id
    );
    this.props.dispatch({
      type: "FETCH_ALL_USER_OPPORTUNITIES",
      payload:
        this.props.reduxState.orgInfo && this.props.reduxState.orgInfo.id,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <center>
          <div className="dashboard-content">
            <h2 className="subtitle">
              Welcome,{" "}
              {this.props.reduxState.orgInfo &&
                this.props.reduxState.orgInfo.org_name}
              !
            </h2>
            {this.props.reduxState.employerUserOpps.length > 0 ? (
              <>
                <h3>
                  <i>Your current opportunities:</i>
                </h3>
                <RecentUserOpps />
              </>
            ) : (
              <>
              <img
                href="/"
                src="images/colorful_dots.png"
                alt="WeCreate Logo: Colorful Dots"
                width="10%"
              ></img>
              <h3>
                  You do not have any current opportunities
                  <br />
                  Submit a new opportunity to get started.
              </h3>
              </>
            )}
            <GoToSubmitOppButton />
          </div>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (reduxState) => ({
  reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserDashboardPage);
