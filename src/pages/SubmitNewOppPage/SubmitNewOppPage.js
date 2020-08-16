import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/DecorativeHeaders/HeaderOne/HeaderOne";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

  componentDidMount = () => {
    this.getOrganizationDetails();
  };

  getOrganizationDetails = () => {
    this.props.dispatch({
      type: "FETCH_ORGANIZATION_DETAILS",
      payload: this.props.reduxState.user.id
    });
  };

  submitOpportunity = (event) => {
    event.preventDefault();
    this.props.dispatch({
          type: "SUBMIT_OPPORTUNITY", //WAS 'REGISTER'
          payload: {
            orgID: this.props.reduxState.orgInfo.id,
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
    const { classes } = this.props;
    return (
      <div>
        <Header />
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
              <label htmlFor="opportunity-type">Opportunity Type</label>
              <select 
                type="text"
                name="opportunity-type"
                value={this.state.oppType}
                onChange={this.handleInputChangeFor("oppType")}>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Gig">Gig</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Contract">Contract</option>
                  <option value="Paid Internship">Paid Internship</option>
              </select>
            </div>
            <div>
              <label htmlFor="opportunity-industry">
                Industry:
                 <select
                  type="text"
                  name="opportunity-industry"
                  value={this.state.industry}
                  onChange={this.handleInputChangeFor("industry")}>
                  <option value="Visual Arts">Visual Arts</option>
                  <option value="Design">Design</option>
                  <option value="Music">Music</option>
                  <option value="Theatre">Theatre</option>
                  <option value="Dance">Dance</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="experience-level">
                Experience Level:
                 <select
                  type="text"
                  name="experience-level"
                  value={this.state.expLevel}
                  onChange={this.handleInputChangeFor("expLevel")}>
                  <option value="Intern">Intern</option>
                  <option value="Entry-Level">Entry-Level</option>
                  <option value="Associate">Associate</option>
                  <option value="Mid-Level">Mid-Level</option>
                  <option value="Senior Level">Senior Level</option>
                  <option value="Director">Director</option>
                  <option value="Executive">Executive</option>
                </select>
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
              </div>
              <br />
            <div>
              <label htmlFor="per">
                Per:
                <select
                  type="text"
                  name="per"
                  value={this.state.per}
                  onChange={this.handleInputChangeFor("per")}>
                    <option value="Hour">Hour</option>
                    <option value="Project">Project</option>
                    <option value="Year">Year</option>
                    <option value="Stipend">Stipend</option>
                </select>
              </label>             
            </div>
            <div>
              <label htmlFor="opportunity-details">
                Opportunity Details:
                <br />
                <textarea
                  name="opportunity-details"
                  value={this.state.oppDetails}
                  onChange={this.handleInputChangeFor("oppDetails")}
                  placeholder="Please provide details on the responsibilites of the job">                    
                  </textarea>
              </label>
            </div>
              <br />
            <div>
              <label htmlFor="link">
                Application Link:
                <input
                  type="text"
                  name="link"
                  value={this.state.link}
                  onChange={this.handleInputChangeFor("link")}
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
                  onClick={this.submitOpportunity}
                  className={classes.button}
                  classes={{ root: classes.root }}
                >
                  Submit
                </Button>
              </center>
            </div>
          </form>
        </div>
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
    );
  }
}

SubmitNewOppPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(connect(mapReduxStateToProps)(SubmitNewOppPage));
