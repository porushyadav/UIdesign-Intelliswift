import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { logoutUser } from "../actions/auth";

import "../index.css";
const styles = (theme) => ({
  changePassword: {
    margin: theme.spacing.unit,
    position: "absolute",
    bottom: theme.spacing(5),
    left: theme.spacing(2),
  },
  logout: {
    margin: theme.spacing.unit,
    position: "absolute",
    bottom: theme.spacing(5),
    left: theme.spacing(50),
  },
});
class User extends Component {
  constructor() {
    super();
    this.state = {
      pass: true,
      password: "1",
    };
  }

  logOut = () => {
    console.log("asdsad");
    this.props.dispatch(logoutUser());
  };
  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };
  changePass = () => {
    console.log("ffsdf");
    let pass = this.state.pass;
    this.setState({
      pass: !pass,
    });
    console.log(this.state);
  };
  render() {
    const { classes } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <Box component="span" display="block" mx={10} my={5} bgcolor="">
          <div className="fontSize">
            UserName : <b>1</b>
          </div>
        </Box>
        <Box
          component="span"
          display="block"
          mx={10}
          my={5}
          bgcolor="background.paper"
        >
          <div className="fontSize">
            Password : &nbsp;
            {this.state.pass ? (
              <b>{this.state.password}</b>
            ) : (
              <input
                type="password"
                onChange={(e) => this.handleChange("password", e.target.value)}
              ></input>
            )}
          </div>
        </Box>
        {this.state.pass ? (
          <Button
            variant="outlined"
            id="changePassword"
            className={classes.changePassword}
            onClick={this.changePass}
          >
            Change Passsword
          </Button>
        ) : (
          <Button
            variant="outlined"
            id="changePassword"
            className={classes.changePassword}
            onClick={this.changePass}
          >
            Update
          </Button>
        )}

        <Button
          variant="outlined"
          id="logout"
          className={classes.logout}
          onClick={this.logOut}
        >
          Logout
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(User);
