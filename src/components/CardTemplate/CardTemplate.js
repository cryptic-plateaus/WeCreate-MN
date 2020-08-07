import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function CardTemplate(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} id="employer-info-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/5.jpg"
          title="Two Employers"
        />
        <CardContent>
          <Typography
            className="for-employer-title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            For Employers
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          className="for-employer-button"
          size="small"
          href="#register"
        >
          Create an Employer Account
        </Button>
      </CardActions>
    </Card>
  );
}

CardTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardTemplate);
