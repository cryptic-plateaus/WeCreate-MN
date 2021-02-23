import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/DecorativeHeaders/HeaderOne/HeaderOne";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    background: 'linear-gradient(45deg, #d500f9 60%, #9e00c5 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: "0 30px",
    fontWeight: "bold",
    margin: "10px",
    justify: "center",
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

const experienceLevels = [
  {
    value: "Entry-Level",
    label: "Entry-Level",
  },
  {
    value: "Associate",
    label: "Associate",
  },
  {
    value: "Mid-Level",
    label: "Mid-Level",
  },
  {
    value: "Senior Level",
    label: "Senior Level",
  },
  {
    value: "Director",
    label: "Director",
  },
  {
    value: "Executive",
    label: "Executive",
  },
  {
    value: "Intern",
    label: "Intern",
  },
  {
    value: "Not Applicable",
    label: "Not Applicable",
  },
];

const compPer = [
  {
    value: "Hour",
    label: "Hour",
  },
  {
    value: "Project",
    label: "Project",
  },
  {
    value: "Year",
    label: "Year",
  },
  {
    value: "Stipend",
    label: "Stipend",
  }
];

const oppType = [
  {
    value: "Full-Time",
    label: "Full-Time",
  },
  {
    value: "Part-Time",
    label: "Part-Time",
  },
  {
    value: "Gig",
    label: "Gig",
  },
  {
    value: "Temporary",
    label: "Temporary",
  },
  {
    value: "Contract",
    label: "Contract",
  },
  {
    value: "Paid Internship",
    label: "Paid Internship",
  },
];

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
      payload: this.props.reduxState.user.id,
    });
  };

  submitOpportunity = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SUBMIT_OPPORTUNITY",
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
    console.log(this.state.closingDate);
  };

  handleClick = (event) => {
    this.props.history.push("/");
  };

  //For presenting only - can be removed later
  populateInputs = () => {
    this.setState({
      oppTitle: "Photographer",
      closingDate: "2020-08-30",
      oppType: "Part-Time",
      industry: "Visual Arts",
      expLevel: "Not Applicable",
      compensation: "25",
      per: "Hour",
      oppDetails:
        "Looking for someone to take photos for our next project. Contract position running until March 2021. Need someone with a good eye and an interest in zoology.",
      link: "digitalexperiences.com/jobs/photographer",
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className="form">
          <center>
            <form>
              <h1 onClick={this.populateInputs} >Submit A New Opportunity</h1>
              <div>
                <TextField
                  required
                  label="Opportunity Title"
                  type="text"
                  name="opportunity-title"
                  value={this.state.oppTitle}
                  onChange={this.handleInputChangeFor("oppTitle")}
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              <div>
                <TextField
                  required
                  label="Closing Date"
                  type="date"
                  name="closing-date"
                  value={this.state.closingDate}
                  onChange={this.handleInputChangeFor("closingDate")}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>
              <div>
                <TextField
                  select
                  required
                  label="Opportunity Type"
                  className={classes.textField}
                  name="opportunity-type"
                  value={this.state.oppType}
                  onChange={this.handleInputChangeFor("oppType")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                  {oppType.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  select
                  required
                  label="Industry"
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
                  select
                  label="Experience Level"
                  required
                  className={classes.textField}
                  type="text"
                  name="experience-level"
                  value={this.state.expLevel}
                  onChange={this.handleInputChangeFor("expLevel")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                  {experienceLevels.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  required
                  label="Compensation"
                  type="number"
                  name="Compensation"
                  value={this.state.compensation}
                  onChange={this.handleInputChangeFor("compensation")}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>
              <div>
                <TextField
                  select
                  label="Per"
                  required
                  className={classes.textField}
                  name="per"
                  value={this.state.per}
                  onChange={this.handleInputChangeFor("per")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                  {compPer.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  label="Opportunity Details:"
                  // defaultValue="Hello World"
                  required
                  multiline
                  rows="5"
                  name="opportunity-details"
                  value={this.state.oppDetails}
                  onChange={this.handleInputChangeFor("oppDetails")}
                  placeholder="Please provide details on the responsibilites of the job"
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              <div>
                <TextField
                  required
                  label="Application Link"
                  name="link"
                  value={this.state.link}
                  onChange={this.handleInputChangeFor("link")}
                  className={classes.textField}
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
                    onClick={this.submitOpportunity}
                    className={classes.button}
                    classes={{ root: classes.root }}
                  >
                    Submit
                  </Button>
                </center>
              </div>
            </form>
          </center>
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
