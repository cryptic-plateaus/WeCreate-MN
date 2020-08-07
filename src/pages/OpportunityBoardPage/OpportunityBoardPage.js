import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from "../../components/OpportunityBoardComponents/SearchBar/SearchBar";
import OpportunityList from "../../components/OpportunityBoardComponents/OpportunityList/OpportunityList";


class OpportunityBoardPage extends Component {

  render() {
    return (
      <div>
        <div className="dashboard-content">
          <center>
            <h2 className="subtitle">Find Your Next Job</h2>
          </center>
          <SearchBar />
          <OpportunityList/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  // user: state.user,
});

export default connect(mapStateToProps)(OpportunityBoardPage);
