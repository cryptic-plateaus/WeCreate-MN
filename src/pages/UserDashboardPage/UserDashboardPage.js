import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoToSubmitOppButton from "../../components/AllButtons/GoToSubmitOppButton/GoToSubmitOppButton";
// import UpdateProfileButton from "../../components/AllButtons/UpdateProfileButton/UpdateProfileButton";
import Header from "../../components/DecorativeHeaders/HeaderTwo/HeaderTwo";
import RecentUserOpps from "../../components/EmployerUserDashboardComponents/RecentUserOppCarousel/RecentUserOppCarousel";
// import CardTemplate from "../../components/CardTemplate/CardTemplate";

class UserDashboardPage extends Component {
  componentDidMount = () => {
    this.getOrganizationDetails();
  };

  getOrganizationDetails = () => {
    this.props.dispatch({
      type: "FETCH_ORGANIZATION_DETAILS",
      payload: this.props.reduxState.user.id
    });
    console.log('TESTING USER:', this.props.reduxState.user.id);
  };
  
  render() {
    return (
      <div>
        <Header />
        <center>
          <div className="dashboard-content">
            <h2 className="subtitle">Welcome, {this.props.reduxState.orgInfo
              && this.props.reduxState.orgInfo.org_name}!</h2>
            <RecentUserOpps />
            <GoToSubmitOppButton />
            {JSON.stringify(this.props.reduxState.employerUserOpps)}
            {/* {this.state.employerUserOpps.map((item) => {
              return (
                <div>
                  <p>{item.opp_title}</p>
                  <p>{item.opp_type}</p>
                  <p>{item.experience_level}</p>
                  <p>{item.closing_date}</p>
                  <p>id={item.id}</p>
                </div>
              );
            })} */}
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
