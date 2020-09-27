import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      usa: moment().format("hh:mm:ss"),
      time: moment().format("hh:mm:ss"),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      usa: moment().format("hh:mm:ss"),
    });
  }
  getTime = () => {
    console.log(this.state.time);
    this.setState({
      usa: this.state.time,
    });
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      time: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row className="my-5">
            <Col xs={12} md={6} className="my-2">
              <div className=" d-inline-block">
                <div className="setTime my-2">
                  Set United State Time &nbsp;
                  <input
                    type="text"
                    className="my-2"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                    disabled
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="my-4">
              <Button variant="dark" className="submit" onClick={this.getTime}>
                Submit
              </Button>
            </Col>
          </Row>
          <hr></hr>
          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row className="my-5">
            <Col xs={12} md={12} lg={6}>
              <div className="setTime">
                United States :<h1 className="display">{this.state.usa} </h1>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="setTime1 my-1">
                London :
                <h2 className="display">
                  {moment().utcOffset("+02:18").format(" hh:mm:ss")}
                </h2>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="setTime1 my-1">
                India :
                <h2 className="display">
                  {moment().utcOffset("+11:12").format(" hh:mm:ss")}
                </h2>
              </div>
            </Col>
          </Row>
          <hr></hr>
          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row>
            <Col xs={12} md={12} lg={6}>
              <div className="setTime1 my-2">
                Time difference for London &nbsp;
                <input className="inputbox my-2" value="3" disabled />
              </div>
            </Col>
            <Col xs={12} md={12} lg={6}>
              <div className="setTime1 my-3">
                Time difference for India &nbsp;
                <input className="inputbox my-2" value="6" disabled />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
