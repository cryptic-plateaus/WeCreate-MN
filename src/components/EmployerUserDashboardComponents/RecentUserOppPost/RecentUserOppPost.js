import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  main: {
    display: "block",
    width: "300px",
    height: "230px",
    color: "black",
    background: "#f9f9f9",
    justify: "center",
    paddingTop: "5%"
  },
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
  }
};

class RecentUserOppPost extends Component {

  state = {
    id: this.props.id,
    title: this.props.title,
    type: this.props.type,
    experience: this.props.experience,
    date: this.props.date
  };
  
  handleClick = (event) => {
    this.props.dispatch({
      type: "DELETE_USER_OPP_POST",
      payload: { opp_id: this.state.id, org_id: this.props.reduxState.orgInfo.id }
    });
  };

  render() {
    const classes = this.props;
    return (
      <center>
        <Card style={styles.main} className={classes.card} className="opportunity-post">
          <div className={classes.details}>
              <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {this.state.title}
                  </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                    {this.state.type}, Experience: {this.state.experience}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Closing Date: {this.state.date.split('T')[0]}
                  </Typography>
                  <br/>
                <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                className="delete-button"
                size="small"
                  onClick={this.handleClick}>
                      Delete Posting
                </Button>
              </CardContent>
          </div>
        </Card>
      </center>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(RecentUserOppPost));
// export default withRouter(RecentUserOppPost);