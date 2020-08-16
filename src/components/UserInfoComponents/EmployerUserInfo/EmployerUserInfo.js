import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployerUserInfo extends Component {

    componentDidMount = () => {
        this.getOrganizationDetails();
    };

    getOrganizationDetails = () => {
        this.props.dispatch({ 
            type: "FETCH_ORGANIZATION_DETAILS",
            payload: this.props.reduxState.user.id
        });
        console.log('TESTING USER ID:', this.props.reduxState.user.id);
    };

    render() {
        return (
                <div className="org-profile">
                    <h1>Organization Profile</h1>                
                    <div className="org-profile-text">
                        <p><b>Organization Name:</b> {this.props.reduxState.orgInfo 
                                    && this.props.reduxState.orgInfo.org_name}</p>
                        <p><b>Website:</b> {this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_website}</p>
                        <p><b>Primary Contact:</b> {this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_contact_name}</p>
                        <p><b>Contact Email:</b> {this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_contact_email}</p>
                        <p><b>Industry:</b> {this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_industry}</p>
                        <p><b>Company Size:</b> {this.props.reduxState.orgInfo
                                    && this.props.reduxState.orgInfo.org_size} Employee(s)</p>
                    </div>
                </div>
        );
    }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (reduxState) => ({
    reduxState,
});


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EmployerUserInfo);
