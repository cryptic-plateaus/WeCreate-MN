import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitOppButton from "../../components/SubmitOppButton/SubmitOppButton";
import UpdateProfileButton from "../../components/UpdateProfileButton/UpdateProfileButton";
import Header from "../../components/DecoHeaderOne/DecoHeaderOne";
import RecentUserOpps from "../../components/RecentUserOpps/RecentUserOpps";

class UserPage extends Component {

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-content">
          <h2 id="welcome">Welcome, {this.props.user.username}!</h2>
          <h3>
            <i>Your current opportunities:</i>
          </h3>
          <RecentUserOpps />
          <SubmitOppButton />
          <UpdateProfileButton />
        </div>
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
