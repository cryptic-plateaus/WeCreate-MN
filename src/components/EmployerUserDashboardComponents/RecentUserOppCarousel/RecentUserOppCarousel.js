// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
// };

// class RecentUserOppCarousel extends React.Component {
//   state = {
//     value: 0,
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <Paper className={classes.root}>
//         <Tabs
//           value={this.state.value}
//           onChange={this.handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           centered
//         >
//           <Tab label="Item One" />
//           <Tab label="Item Two" />
//           <Tab label="Item Three" />
//         </Tabs>
//       </Paper>
//     );
//   }
// }

// RecentUserOppCarousel.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(RecentUserOppCarousel);


import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
// import {Paper} from '@material-ui/core';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import RecentUserOppPost from "../RecentUserOppPost/RecentUserOppPost";
import { connect } from 'react-redux';

const styles = (theme) => ({
  input: {
    display: "none",
  },
});

class RecentUserOppCarousel extends Component {
  state = {
    id: 9, //Needs to grab Employer ID based on logged-in user
  }

  componentDidMount = () => {
    this.getOrganizationOpportunities();
  };

  getOrganizationOpportunities = () => {
    this.props.dispatch({
      type: "FETCH_ALL_USER_OPPORTUNITIES",
      payload: this.state.id
    });
    // console.log('TESTING:', this.props.state.orgInfo);
    console.log('TESTING STATE ID:', this.state.id);
  };


  render() {
    return (
      <>
      <h3>
        <i>Your current opportunities:</i>
      </h3>
      <Carousel
        className="carousel"
        navButtonsAlwaysVisible={true}
        next={(next, active) => {
          console.log(`we left ${active}, and are now at ${next}`);
        }}
        prev={(prev, active) => {
          console.log(`we left ${active}, and are now at ${prev}`);
        }}
      >
        {/* ITEM IN CAROUSEL!!! */}

        {/* {this.state.items.map((item, i) => (
          <Paper>
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <Button className="CheckButton">Check it out!</Button>
          </Paper>

          // <Item key={i} item={this.state.items} />
        ))} */}

        <RecentUserOppPost />
        <RecentUserOppPost />
        <RecentUserOppPost />
      </Carousel>
      </>
    );
  }
}

// RecentUserOppCarousel.propTypes = {
//   // classes: PropTypes.object.isRequired,
// };

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(RecentUserOppCarousel));
