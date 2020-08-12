import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Modal from "./Modal";

const styles = {

};

function Nav (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5" color="inherit" noWrap>
              WeCreate MN
          </Typography>        
          <div>
            {props.user.id && (
              <>
                <Button
                  size="large" 
                  href="#"
                  className={classes.button}>
                  Dashboard
                </Button>
                <Button
                  size="large"
                  href="#info"
                  className={classes.button}>
                  User Info
                </Button>
              </>
            )}
          </div>
          {props.user.id ?
            <Button
              size="large"
              href="#"
              className={classes.button}>
              Log Out
                </Button> :
            <Button
              size="large"
              href="#login"
              className={classes.button}>
              Login
                </Button>}
                {/* <Modal/> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default withStyles(styles)(connect(mapStateToProps)(Nav));