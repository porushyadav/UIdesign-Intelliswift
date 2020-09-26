import React, { Component } from "react";
import "../index.css";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      open: false,
    };
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  signIn = () => {
    const { username, password } = this.state;
    if (username >= 1 && username <= 9 && password === "1") {
      this.props.dispatch(login({ username, password }));
    } else {
      this.setState({
        open: true,
        message: "Incorrect Username or Password!",
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { isLoggedin } = this.props.auth;

    if (isLoggedin) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="Login">
            <label className="heading">Username</label>

            <TextField
              variant="standard"
              placeholder="Default username  between 1-10"
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
              className="size"
            />
            <label className="heading">Password</label>
            <TextField
              variant="standard"
              placeholder="Default password 1"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
              className="size"
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.signIn();
                }}
              >
                Log In
              </Button>
            </div>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
