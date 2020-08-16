import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import './App.css';

//Site components
import FooterTwo from '../FooterTwo/FooterTwo';
import Nav from '../Nav/Nav';

//Public pages
import EmployerRegisterPage from "../../pages/EmployerRegisterPage/EmployerRegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import OpportunityBoardPage from "../../pages/OpportunityBoardPage/OpportunityBoardPage"
import OpportunityDetailsPage from "../../pages/OpportunityDetailsPage/OpportunityDetailsPage";

//Private pages
import UserDashboardPage from '../../pages/UserDashboardPage/UserDashboardPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import SubmitNewOppPage from "../../pages/SubmitNewOppPage/SubmitNewOppPage";

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
            Visiting localhost:3000/home will show the UserDashboardPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/" component={UserDashboardPage} />

            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/profile" component={ProfilePage} />
            {/* If none of the other routes matched, we will show a 404. */}
            {/* <Route render={() => <h1>404</h1>} /> */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute path="/user_opp" component={UserOppDetailsPage} /> */}
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
          <Route path="/opportunities" component={OpportunityBoardPage} />
          <Route path="/details" component={OpportunityDetailsPage} />
          <FooterTwo />
        </div>
      </Router>
    );}
}

export default connect()(App);
