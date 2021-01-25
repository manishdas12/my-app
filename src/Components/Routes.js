import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from '../Components/login/Login';
import RegistrationForm from '../Components/login/RegistrationForm';
import Dashboard from "../Components/login/Dashboard";
import NotFound from "../Components/login/NotFound";


const Routes = (props) => (    
  <Router {...props}>
      {/* <Redirect to="/login" /> */}
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registrationForm">
        <RegistrationForm />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
export default Routes;