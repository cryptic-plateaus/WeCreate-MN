import React, {Component} from 'react';
import {
  HashRouter as 
  Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

// import AboutPage from '../AboutPage/AboutPage';

import UserPage from '../../pages/UserPage/UserPage';
import InfoPage from '../../pages/InfoPage/InfoPage';

import SubmitNewOppPage from "../../pages/SubmitNewOppPage/SubmitNewOppPage";

import './App.css';

//Public pages
import EmployerRegisterPage from "../../pages/EmployerRegisterPage/EmployerRegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import OpportunityBoardPage from "../../pages/OpportunityBoardPage/OpportunityBoardPage"


class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            {/* <Redirect exact from="/" to="/home" /> */}
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* <Route
              exact
              path="/about"
              component={AboutPage}
            /> */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/" component={UserPage} />

            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage} />
            {/* If none of the other routes matched, we will show a 404. */}
            {/* <Route render={() => <h1>404</h1>} /> */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/submit" component={SubmitNewOppPage} />
            {/* If none of the other routes matched, we will show a 404. */}
            {/* <Route render={() => <h1>404</h1>} /> */}
          </Switch>
          <Route path="/register" component={EmployerRegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/opportunity" component={OpportunityBoardPage} />
          <Footer />
        </div>
      </Router>
    );}
}

export default connect()(App);
