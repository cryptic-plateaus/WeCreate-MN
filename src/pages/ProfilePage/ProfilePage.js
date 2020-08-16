import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../../components/DecorativeHeaders/HeaderOne/HeaderOne";
import EmployerUserInfo from '../../components/UserInfoComponents/EmployerUserInfo/EmployerUserInfo';
import EditEmployerUserInfo from "../../components/UserInfoComponents/EditEmployerUserInfo/EditEmployerUserInfo";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";

const styles = (theme) => ({
  root: {
    background: 'linear-gradient(45deg, #fbbd41 60%, #fb9e41 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontWeight: 'bold',
    margin: "10px",
    justify: 'center'
  },
});

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
    
    const { classes } = this.props;
    
    return (
      <div>
        <Header />
        <center>
          <div className="dashboard-content">
            <Fade bottom>
              <div>
                {this.state.edit ? (
                  <div>
                    <EmployerUserInfo />
                    <Button
                      variant="contained"
                      className="edit-profile"
                      className={classes.button}
                      classes={{ root: classes.root }}
                      onClick={this.toggleEdit}
                    >
                      Edit Profile
                    </Button>
                  </div>
                ) : (
                  <div>
                    <EditEmployerUserInfo />
                    <Button
                      variant="contained"
                      className="back-to-profile"
                      className={classes.button}
                      classes={{ root: classes.root }}
                      onClick={this.toggleEdit}
                    >
                      Back to Profile
                    </Button>
                  </div>
                )}
              </div>
            </Fade>
          </div>
        </center>
      </div>
    );
  }
}

UserInfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(UserInfoPage));
