import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import { Login, Navbar, Home, Task, User } from "./index";
import { logina } from "../actions/auth";
const PrivateRoute = (privateRouteProps) => {
  const {
    isLoggedin,
    path,
    component: Component,
    dispatch,
  } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        console.log("props", props);
        console.log("isLoggedin", isLoggedin);
        return isLoggedin ? (
          <Component {...props} dispatch={dispatch} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("id");
    if (token) {
      this.props.dispatch(logina());
    }
  }

  render() {
    const { auth } = this.props;
    console.log(this.props.dispatch);
    return (
      <Router>
        <Navbar auth={auth} />
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute
            path="/home"
            component={Home}
            isLoggedin={auth.isLoggedin}
          />
          <PrivateRoute
            path="/task"
            component={Task}
            dispatch={this.props.dispatch}
            isLoggedin={auth.isLoggedin}
          />
          <PrivateRoute
            path="/user"
            component={User}
            dispatch={this.props.dispatch}
            isLoggedin={auth.isLoggedin}
          />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
