import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { connect } from 'react-redux';
import './Footer.css';

const home = (props) => <RouterLink to="/" {...props} />;

const Footer = (props) => (
  <div className="footer">
    <div className="footer-logos">    
      <Link to="/home">
      <img
        className="footer-logo"
        width="40"
        alt="WeCreate MN Logo, smallest version"
        src="images/example_logo.png"
      />
    </Link>
    <Link
      component={home}
      underline="none"
      variant="h5"
      color="white"
      underline="none"
      className="footer-link"
    >
      WeCreate MN
    </Link>
    <img
      className="social-icon"
      width="25"
      alt="Instagram logo"
      src="images/insta_logo.png"
    />
    </div>
    <p className="footer-message">
      WeCreate MN is based in the Twin Cities, MN
    </p>
    <p className="footer-copyright">&copy; WeCreate MN</p>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Footer);

