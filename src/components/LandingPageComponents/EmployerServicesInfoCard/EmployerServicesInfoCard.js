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
    display: "block",
    width: "80%",
    color: "black",
    background: "#f9f9f9",
    textAlign: "left",
  },
  root: {
    background: 'linear-gradient(45deg, #fbbd41 60%, #fb9e41 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginLeft: "28%",
    marginRight: "20%"
  },
  media: {
    height: 340,
  },
};

function EmployerServicesInfoCard(props) {
  const { classes } = props;
  return (
    <Card style={styles.card} id="info-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/5.jpg"
          title="Two Employers"
        />
        <CardContent>
          <Typography
            className="card-title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            For Employers
          </Typography>
          <Typography component="p">
            Our platform gives employers, who are interested in 
            hiring candidates from diverse backgrounds and practices, 
            the ability to post paid opportunities to the WeCreate MN community.
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
            classes={{root:classes.root}}
          >
            Create Employer Account
          </Button>      
      </CardActions>
    </Card>
  );
}

EmployerServicesInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployerServicesInfoCard);


