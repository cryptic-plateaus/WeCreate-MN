import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = (theme) => ({
  root: {
    color: "white",
    fontWeight: "bold",
    margin: "10px",
  },
  textField: {
    width: 400,
    margin: "10px",
  },
});

const industries = [
  {
    value: "Dance",
    label: "Dance",
  },
  {
    value: "Design",
    label: "Design",
  },
  {
    value: "Visual Arts",
    label: "Visual Arts",
  },
  {
    value: "Music",
    label: "Music",
  },
  {
    value: "Theatre",
    label: "Theatre",
  },
];

class EmployerUserInfo extends Component {
    
    state = {
      orgName: 
        this.props.reduxState.orgInfo
        && this.props.reduxState.orgInfo.org_name,      
      orgWebsite:
        this.props.reduxState.orgInfo
        && this.props.reduxState.orgInfo.org_website,
      nameOfContact: 
        this.props.reduxState.orgInfo
        && this.props.reduxState.orgInfo.org_contact_name,
      emailOfContact: 
        this.props.reduxState.orgInfo
        && this.props.reduxState.orgInfo.org_contact_email,
      industry: 
        this.props.reduxState.orgInfo
        && this.props.reduxState.orgInfo.org_industry,
      orgSize: 
        this.props.reduxState.orgInfo
        && this.props.reduxState.orgInfo.org_size
    };

    updateEmployerUser = (event) => {
        event.preventDefault();
        if (
            this.state.orgName &&
            this.state.orgWebsite &&
            this.state.nameOfContact &&
            this.state.emailOfContact &&
            this.state.industry &&
            this.state.orgSize
        ) {
            this.props.dispatch({
                type: "CHANGE_ORG_DETAILS",
                payload: {
                    userID: this.props.reduxState.user.id,
                    orgName: this.state.orgName,
                    orgWebsite: this.state.orgWebsite,
                    nameOfContact: this.state.nameOfContact,
                    emailOfContact: this.state.emailOfContact,
                    industry: this.state.industry,
                    orgSize: this.state.orgSize,
                },
            });
        } 
        console.log("You clicked me!");
    };


    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    render() {

        const { classes } = this.props;

        return (
          <div>
            <div className="form">
              <h1>Edit Organization Profile</h1>
              <form onSubmit={this.updateEmployerUser}>
                <div>
                  <TextField
                    required
                    // defaultValue={
                    //   this.props.reduxState.orgInfo &&
                    //   this.props.reduxState.orgInfo.org_name
                    // }
                    label="Organization Name"
                    type="text"
                    value={this.state.orgName}
                    onChange={this.handleInputChangeFor("orgName")}
                    className={classes.textField}
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                  />
                </div>
                <div>
                  <TextField
                    required
                    // defaultValue={
                    //   this.props.reduxState.orgInfo &&
                    //   this.props.reduxState.orgInfo.org_website
                    // }
                    label="Organization Website"
                    type="text"
                    name="organization-website"
                    value={this.state.orgWebsite}
                    onChange={this.handleInputChangeFor("orgWebsite")}
                    className={classes.textField}
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                  />
                </div>
                <div>
                  <TextField
                    required
                    // defaultValue={
                    //     this.props.reduxState.orgInfo &&
                    //     this.props.reduxState.orgInfo.org_contact_name
                    //   }
                    label="Name of Primary Contact"
                    type="text"
                    name="organization-contact-name"
                    value={this.state.nameOfContact}
                    onChange={this.handleInputChangeFor("nameOfContact")}
                    className={classes.textField}
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                  />
                </div>
                <div>
                  <TextField
                    required
                    // defaultValue={{
                    //     this.props.reduxState.orgInfo &&
                    //     this.props.reduxState.orgInfo.org_contact_email
                    //   }
                    label="Email of Primary Contact"
                    type="text"
                    name="organization-contact-email"
                    value={this.state.emailOfContact}
                    onChange={this.handleInputChangeFor("emailOfContact")}
                    className={classes.textField}
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                  />
                </div>
                <div>
                  <TextField
                    select
                    label="Organization Industry"
                    className={classes.textField}
                    name="organization-industry"
                    value={this.state.industry}
                    onChange={this.handleInputChangeFor("industry")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                  >
                    {industries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    required
                    label="Organization Size"
                    name="Organization Size"
                    value={this.state.orgSize}
                    onChange={this.handleInputChangeFor("orgSize")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                  />
                </div>
                <div>
                  <center>
                    <Button
                      variant="contained"
                      className="log-in"
                      type="submit"
                      name="submit"
                      value="Submit"
                      className={classes.button}
                      color="secondary"
                      classes={{ root: classes.root }}
                    >
                      Save
                    </Button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

EmployerUserInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (reduxState) => ({
    reduxState,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(EmployerUserInfo));
