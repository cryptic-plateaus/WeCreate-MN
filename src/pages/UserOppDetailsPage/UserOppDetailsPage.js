import React, { Component } from 'react';
import { connect } from 'react-redux';
import OppInfoCard from '../../components/OppDetailsComponents/OppInfoCard/OppInfoCard';
import EmployerInfoCard from '../../components/OppDetailsComponents/EmployerInfoCard/EmployerInfoCard';
import HeaderThree from "../../components/DecorativeHeaders/HeaderThree/HeaderThree";
import DeleteOppButton from "../../components/AllButtons/DeleteOppButton/DeleteOppButton";

class UserOppDetailsPage extends Component {

    // <ProtectedRoute exact path="/user_opp" component={UserOppDetailsPage} />
    state = {
        id: this.props.match.params.id
    }

    componentDidMount = ( ) => {
        console.log("hey:",this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <div className="dashboard-content">
                    <center>
                        <HeaderThree/>
                        <h1>{this.state.id}</h1>
                        <h1>Opportunity Name</h1>
                        <h3 className="opp-close"><i>Closes On [DATE HERE]</i></h3>
                        <OppInfoCard/>
                        {/* <EmployerInfoCard/> */}
                        <div className="opp-details-paragraph"><p>"details"</p></div>
                        <p>Application Link</p>
                        <button>Delete Opportunity</button>
                    </center>
                    
                  
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    // user: state.user,
});

export default connect(mapStateToProps)(UserOppDetailsPage);
