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
  root: {
    background: 'linear-gradient(45deg, #6633ff 30%, #6600cc 90%)',
    color: 'white',
  },
};

function Nav (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
      }}>
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
                  href="#Profile"
                  className={classes.button}>
                  Profile
                </Button>
              </>
            )}
          </div>
          {props.user.id ?
            <Button
              size="large"
              href="#"
              className={classes.button}
              className = {props.className}
              onClick={() => props.dispatch({ type: 'LOGOUT' })}>
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

