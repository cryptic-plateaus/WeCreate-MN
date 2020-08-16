import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
    root: {
        color: 'white',
        fontWeight: 'bold',
        margin: "10px",
    },
});

class EmployerUserInfo extends Component {
    
    state = {
        orgName: "",
        orgWebsite: "",
        nameOfContact: "",
        emailOfContact: "",
        industry: "",
        orgSize: "",
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
                    <h1>Edit Organization Profile</h1> 
                    <div className="form">
                        <form onSubmit={this.updateEmployerUser}>
                            <div>
                                <label htmlFor="organization-name">
                                Organization Name:
                                    <input 
                                        placeholder={this.props.reduxState.orgInfo
                                        && this.props.reduxState.orgInfo.org_name} 
                                        type="text" name="organization-name" 
                                        value={this.state.orgName} 
                                        onChange={this.handleInputChangeFor("orgName")}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="organization-website">
                                Website:
                                    <input 
                                        placeholder={this.props.reduxState.orgInfo
                                        && this.props.reduxState.orgInfo.org_website}
                                        type="text" name="organization-website" 
                                        value={this.state.orgWebsite} 
                                        onChange={this.handleInputChangeFor("orgWebsite")}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="organization-contact-name">
                                Primary Contact:
                                <input 
                                    placeholder={this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_contact_name}
                                    type="text" name="organization-contact-name" 
                                    value={this.state.nameOfContact} 
                                    onChange={this.handleInputChangeFor("nameOfContact")}
                                />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="organization-contact-email">
                                Contact Email:
                                <input 
                                    placeholder={this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_contact_email}
                                    type="text" name="organization-contact-email" 
                                    value={this.state.emailOfContact} 
                                    onChange={this.handleInputChangeFor("emailOfContact")} 
                                />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="organization-industry">
                                Industry:
                                <input 
                                    placeholder={this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_industry}
                                    type="text" name="organization-industry" 
                                    value={this.state.industry} 
                                    onChange={this.handleInputChangeFor("industry")} 
                                />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="organization-size">
                                Company Size:
                                <input 
                                    placeholder={this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_size}
                                    type="number" name="organization-size" 
                                    value={this.state.orgSize} 
                                    onChange={this.handleInputChangeFor("orgSize")} 
                                />
                                </label>
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
