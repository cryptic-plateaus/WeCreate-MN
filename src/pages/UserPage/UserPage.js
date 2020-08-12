import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoToSubmitOppButton from "../../components/AllButtons/GoToSubmitOppButton/GoToSubmitOppButton";
// import UpdateProfileButton from "../../components/AllButtons/UpdateProfileButton/UpdateProfileButton";
import Header from "../../components/DecorativeHeaders/HeaderTwo/HeaderTwo";
import RecentUserOpps from "../../components/EmployerUserDashboardComponents/RecentUserOppCarousel/RecentUserOppCarousel";
// import CardTemplate from "../../components/CardTemplate/CardTemplate";

class UserPage extends Component {

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <Header />
        <center>
          <div className="dashboard-content">
            <h2 className="subtitle">Welcome, {this.props.user.username}!</h2>
            <RecentUserOpps />
            {/* <CardTemplate /> */}
            <GoToSubmitOppButton />
          </div>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
