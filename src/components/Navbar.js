import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
    fontSize: 15,
    minWidth: "100px",
    minHeight: "50px",

    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  title: {
    flexGrow: 2,
  },
  spacebetween: {
    spacing: 80,
    minWidth: "100px",
    minHeight: "50px",
    fontSize: 15,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
});
class Navbar extends Component {
  render() {
    const { classes, auth } = this.props;
    console.log(classes);
    console.log(auth.isLoggedin);
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "#2E3B55" }}>
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              <Link to="/home">
                <Button
                  color="inherit"
                  variant="h3"
                  className={classes.spacebetween}
                >
                  Home
                </Button>
              </Link>
              <Link to="/task">
                <Button
                  color="inherit"
                  variant="h3"
                  className={classes.spacebetween}
                >
                  Task
                </Button>
              </Link>

              <Link to="/user">
                <Button
                  color="inherit"
                  variant="h3"
                  className={classes.spacebetween}
                >
                  User
                </Button>
              </Link>
            </Typography>
            {!auth.isLoggedin && (
              <Link to="/">
                <Button color="inherit" className={classes.menuButton}>
                  Login
                </Button>
              </Link>
            )}
            {auth.isLoggedin && (
              <Link to="/user">
                <Button color="inherit" className={classes.menuButton}>
                  Welcome
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
