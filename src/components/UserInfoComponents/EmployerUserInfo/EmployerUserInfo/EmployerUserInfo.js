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
            <div>
                    <div>
                        <h1>Organization Profile</h1>                
                        <p>Organization Name: {this.props.reduxState.orgInfo 
                            && this.props.reduxState.orgInfo.org_name}</p>
                        <p>Website: {this.props.reduxState.orgInfo
                            && this.props.reduxState.orgInfo.org_website}</p>
                        <p>Primary Contact: {this.props.reduxState.orgInfo
                            && this.props.reduxState.orgInfo.org_contact_name}</p>
                        <p>Contact Email: {this.props.reduxState.orgInfo
                            && this.props.reduxState.orgInfo.org_contact_email}</p>
                        <p>Industry: {this.props.reduxState.orgInfo
                            && this.props.reduxState.orgInfo.org_industry}</p>
                        <p>Company Size: {this.props.reduxState.orgInfo
                            && this.props.reduxState.orgInfo.org_size} Employees</p>
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
