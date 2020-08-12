import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployerUserInfo extends Component {
    state = {
        id: this.props.reduxState.user.id,
        // orgInfo: this.props.reduxState.orgInfo.data.id
    }

    componentDidMount = () => {
        this.getOrganizationDetails();
    };

    getOrganizationDetails = () => {
        this.props.dispatch({ 
            type: "FETCH_ORGANIZATION_DETAILS",
            payload: this.state.id
        });
        // console.log('TESTING:', this.props.state.orgInfo);
        console.log('TESTING STATE ID:', this.state.id); 
        console.log('TESTING USER:', this.props.reduxState.user.id);
    };

    render() {
        return (
            <div>
                    <div>
                        
                        <p>Organization Profile</p>
                        <p>Organization Website</p>
                        <p>Name of Primary Contact</p>
                        <p>Primary Contact Email</p>
                        <p>Industry</p>
                        <p>Organization Size</p>
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
