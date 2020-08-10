import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/DecorativeHeaders/HeaderOne/HeaderOne";
import SubmitOppButton from "../../components/AllButtons/SubmitOppButton/SubmitOppButton";

class SubmitNewOppPage extends Component {
  state = {
    oppTitle: "",
    closingDate: "",
    oppType: "",
    industry: "",
    expLevel: "",
    compensation: "",
    per: "",
    oppDetails: "",
    link: "",
  };

  // submitOpportunity = (event) => {
  //   event.preventDefault();

  //   if (
  //     this.state.oppTitle &&
  //     this.state.closingDate &&
  //     this.state.oppType &&
  //     this.state.industry &&
  //     this.state.expLevel &&
  //     this.state.compensation &&
  //     this.state.per &&
  //     this.state.oppDetails &&
  //     this.state.link
  //   ) {
  //     this.props.dispatch({
  //       type: "SUBMIT_OPPORTUNITY", //WAS 'REGISTER'
  //       payload: {
  //         oppTitle: this.state.oppTitle,
  //         closingDate: this.state.closingDate,
  //         oppType: this.state.oppType,
  //         industry: this.state.industry,
  //         expLevel: this.state.expLevel,
  //         compensation: this.state.compensation,
  //         per: this.state.per,
  //         oppDetails: this.state.oppDetails,
  //         link: this.state.link,
  //       },
  //     });
  //   } else {
  //     this.props.dispatch({ type: "OPPORTUNITY_INPUT_ERROR" });
  //   }
  // }; // end submitOpportunity

  submitOpportunity = (event) => {
    event.preventDefault();
    this.props.dispatch({
          type: "SUBMIT_OPPORTUNITY", //WAS 'REGISTER'
          payload: {
            oppTitle: this.state.oppTitle,
            closingDate: this.state.closingDate,
            oppType: this.state.oppType,
            industry: this.state.industry,
            expLevel: this.state.expLevel,
            compensation: this.state.compensation,
            per: this.state.per,
            oppDetails: this.state.oppDetails,
            link: this.state.link,
          },
        });
  }; // end submitOpportunity

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleClick = (event) => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Header />
        {/* {JSON.stringify(this.state)} testing on-change */}
        {/* {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )} */}
        <div className="form">
          <form>
            <h2>Submit An Opportunity</h2>
            <div>
              <label htmlFor="opportunity-title">
                Opportunity Title:
                <input
                  type="text"
                  name="opportunity-title"
                  value={this.state.oppTitle}
                  onChange={this.handleInputChangeFor("oppTitle")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="closing-date">
                Closing Date:
                <input
                  type="date"
                  name="closing-date"
                  value={this.state.closingDate}
                  onChange={this.handleInputChangeFor("closingDate")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="organization-website">
                Organization Website:
                <input
                  type="text"
                  name="organization-website"
                  value={this.state.orgWebsite}
                  onChange={this.handleInputChangeFor("orgWebsite")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="opportunity-type">
                Opportunity Type:
                <input
                  type="text"
                  name="opportunity-type"
                  value={this.state.oppType}
                  onChange={this.handleInputChangeFor("oppType")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="opportunity-industry">
                Industry:
                <input
                  type="text"
                  name="opportunity-industry"
                  value={this.state.industry}
                  onChange={this.handleInputChangeFor("industry")}
                />
              </label>
            </div>
            <div>
              <br />
              <label htmlFor="compensation">
                Compensation:
                <input
                  type="number"
                  name="compensation"
                  value={this.state.compensation}
                  onChange={this.handleInputChangeFor("compensation")}
                />
              </label>
              <br />
              <label htmlFor="per">
                Per:
                <input
                  type="text"
                  name="per"
                  value={this.state.per}
                  onChange={this.handleInputChangeFor("per")}
                />
              </label>
              <br />
              <label htmlFor="opportunity-details">
                Opportunity Details:
                <textarea
                  name="opportunity-details"
                  value={this.state.oppDetails}
                  onChange={this.handleInputChangeFor("oppDetails")}
                ></textarea>
              </label>
              <br />
              <label htmlFor="experience-level">
                Application Link:
                <input
                  type="text"
                  name="experience-level"
                  value={this.state.expLevel}
                  onChange={this.handleInputChangeFor("expLevel")}
                />
              </label>
            </div>
            {/* <SubmitOppButton  /> */}
            <button onClick={this.submitOpportunity}>Submit!</button>
          </form>
          <center>
            <button
              type="button"
              onClick={this.handleClick}
              className="link-button"
            >
              Go Back
            </button>
          </center>
        </div>
      </div>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(SubmitNewOppPage);
