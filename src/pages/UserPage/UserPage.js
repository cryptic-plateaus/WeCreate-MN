import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoToSubmitOppButton from "../../components/buttons/GoToSubmitOppButton/GoToSubmitOppButton";
import UpdateProfileButton from "../../components/buttons/UpdateProfileButton/UpdateProfileButton";
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
            <h2 id="welcome">Welcome, {this.props.user.username}!</h2>
            <h3>
              <i>Your current opportunities:</i>
            </h3>
            <RecentUserOpps />
            {/* <CardTemplate /> */}
            <GoToSubmitOppButton />
            <UpdateProfileButton />
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
