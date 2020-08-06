import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  // card: {
  //   display: 'flex',
  // },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  // content: {
  //   flex: '1 0 auto',
  // },
  // cover: {
  //   width: 151, //for image
  // },
});

function OpportunityPost(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card} className="opportunity-post">
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg" //need to be retreived from database
        title="Live from space album cover" //orgname + logo here
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Opportunity Title
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Organization Name
          </Typography>
          <Button size="small" variant="contained" color="primary">
            Learn More
          </Button>
        </CardContent>
        <div className={classes.controls}></div>
      </div>
    </Card>
  );
}

OpportunityPost.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(OpportunityPost);
