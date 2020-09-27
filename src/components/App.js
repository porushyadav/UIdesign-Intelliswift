import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Home, Login, SignUp } from "./index";
class App extends Component {
  componentDidMount() {}

  render() {
    const { auth } = this.props;

    return (
      <div>
        <Router>
          <Navbar auth={auth} />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
