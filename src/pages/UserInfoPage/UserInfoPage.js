import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpdateProfileButton from "../../components/AllButtons/UpdateProfileButton/UpdateProfileButton";
import Header from "../../components/DecorativeHeaders/HeaderOne/HeaderOne";
import EmployerUserInfo from '../../components/UserInfoComponents/EmployerUserInfo/EmployerUserInfo';




class UserInfoPage extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <center>
          <div className="dashboard-content">
            <h1>Organization Profile</h1> 
            <EmployerUserInfo/>
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
export default connect(mapStateToProps)(UserInfoPage);
