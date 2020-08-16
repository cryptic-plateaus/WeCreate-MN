import React, { Component } from "react";
import { connect } from "react-redux";
import OpportunityPost from "../OpportunityPost/OpportunityPost";
import Fade from "react-reveal/Fade";

class OpportunityList extends Component {
  componentDidMount = () => {
    this.getAllOpportunties();
  };

  getAllOpportunties = () => {
    this.props.dispatch({ type: "FETCH_ALL_OPPORTUNITIES" });
  };

  render() {
    return (
      <div>
        {this.props.allOpportunities.map((item) => {
          return (
            <div>
              <Fade bottom>
                <OpportunityPost
                  title={item.opp_title}
                  type={item.opp_type}
                  experience={item.experience_level}
                  date={item.closing_date}
                  key={item.id}
                  id={item.id}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapReduxStateToProps = (state) => ({
  allOpportunities: state.allOpportunities,
});

export default connect(mapReduxStateToProps)(OpportunityList);
