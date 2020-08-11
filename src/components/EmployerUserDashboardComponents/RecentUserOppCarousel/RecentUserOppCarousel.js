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


import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RecentUserOppPost from "../RecentUserOppPost/RecentUserOppPost";

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
// };
const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

class RecentUserOppCarousel extends React.Component {
  // state = {
  //   items: [
  //       {
  //           name: "Random Name #1",
  //           description: "Probably the most random thing you have ever seen!"
  //       },
  //       {
  //           name: "Random Name #2",
  //           description: "Hello World!"
  //       }
  //   ]
  // };

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

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

RecentUserOppCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecentUserOppCarousel);
