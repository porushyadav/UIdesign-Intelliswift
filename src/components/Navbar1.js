import React, { Component } from "react";
import { Navbar, Form, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Link to="/home">
            <Navbar.Brand href="#home" className="mx-5">
              Home
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto"></Nav>
          <div className="right">
            <Form inline className="mr-right">
              <Link to="/login">
                <Button variant="outline-info" className="mx-2">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline-info" className="mx-2">
                  SignUp
                </Button>
              </Link>
            </Form>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navbar1;
