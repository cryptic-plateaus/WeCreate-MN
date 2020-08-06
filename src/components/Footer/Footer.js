import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Footer.css';

const Footer = (props) => (
  <div className="footer">
    <Link to="/home">
      <img className="footer-logo" width="100" alt="WeCreate MN Logo, smallest version" src="images/example_logo.png" />
    </Link>
      <img className="social-icon" width="25" alt="Instagram logo" src="images/insta_logo.png" />
    <p className="footer-message">WeCreate MN is based in the Twin Cities, MN</p>
    <p className="footer-copyright">&copy; WeCreate MN</p>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Footer);

