import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/DecoHeaderOne/DecoHeaderOne";

class SubmitNewPostPage extends Component {
  state = {
    oppTitle: "",
    closingDate: "",
    oppType: "",
    industry: "",
    expLevel: "",
    compensation: "",
    per: "",
    oppDetails: ""
  };

  registerUser = (event) => {
    event.preventDefault();

    if (
      this.state.username &&
      this.state.password
      // &&
      // this.state.orgWebsite &&
      // this.state.nameOfContact &&
      // this.state.emailOfContact &&
      // this.state.industry &&
      // this.state.orgSize
    ) {
      this.props.dispatch({
        type: "SUBMIT_OPP", //WAS 'REGISTER'
        payload: {
          username: this.state.username,
          password: this.state.password,
          orgWebsite: this.state.orgWebsite,
          nameOfContact: this.state.nameOfContact,
          emailOfContact: this.state.emailOfContact,
          industry: this.state.industry,
          orgSize: this.state.orgSize,
        },
      });
    } else {
      this.props.dispatch({ type: "OPPORTUNITY_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

//   handleClick = (event) => {
//     this.props.history.push("/login");
//   };

  render() {
    return (
      <div>
        <Header />
        {/* {JSON.stringify(this.state)} testing on-change */}
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <div className="form">
          <form onSubmit={this.registerUser}>
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
              <label htmlFor="experience-level">
                Experience Level:
                <input
                  type="text"
                  name="experience-level"
                  value={this.state.expLevel}
                  onChange={this.handleInputChangeFor("expLevel")}
                />
              </label>
              <label htmlFor="compensation">
                Compensation:
                <input
                  type="number"
                  name="compensation"
                  value={this.state.compensation}
                  onChange={this.handleInputChangeFor("compensation")}
                />
              </label>
              <label htmlFor="per">
                Per:
                <input
                  type="number"
                  name="per"
                  value={this.state.per}
                  onChange={this.handleInputChangeFor("per")}
                />
              </label>
              <label htmlFor="opportunity-details">
                Opportunity Details:
                <textarea
                  name="opportunity-details"
                  value={this.state.oppDetails}
                  onChange={this.handleInputChangeFor("oppDetails")}
                ></textarea>
              </label>
            </div>
            <div>
              <input
                className="register"
                type="submit"
                name="submit"
                value="Create a Profile"
              />
            </div>
          </form>
          <center>
            <button
              type="button"
              onClick={this.handleClick}
              className="link-button"
            >
              Login
            </button>
          </center>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(SubmitNewPostPage);
