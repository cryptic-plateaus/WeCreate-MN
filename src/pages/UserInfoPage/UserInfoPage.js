import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpdateProfileButton from "../../components/AllButtons/UpdateProfileButton/UpdateProfileButton";
import Header from "../../components/DecorativeHeaders/HeaderOne/HeaderOne";
import EmployerUserInfo from '../../components/UserInfoComponents/EmployerUserInfo/EmployerUserInfo';
import EditEmployerUserInfo from "../../components/UserInfoComponents/EditEmployerUserInfo/EditEmployerUserInfo";



class UserInfoPage extends Component {
 
  state = {
    edit: true,
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  
  render() {
    return (
      <div>
        <Header />
        <center>
          <div className="dashboard-content">
            <div >
              {(this.state.edit ?
                <div>
                  <EmployerUserInfo /> 
                  <button onClick={this.toggleEdit}>Edit</button>
                </div> :
                <div>
                  <EditEmployerUserInfo />
                  <button onClick={this.toggleEdit}>back to profile</button>
                </div>)}
            </div>
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
