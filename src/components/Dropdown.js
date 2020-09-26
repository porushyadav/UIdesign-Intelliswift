import React from "react";
import "../index.css";
import { Information } from "./index";
class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  handledropdown = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="dropdown">
          <select onClick={this.handledropdown} id="dropdown">
            <option value="1">Reactjs</option>
            <option value="2">Nodejs</option>
            <option value="3">MongoDb</option>
          </select>
        </div>
        <Information value={this.state.value} />
      </div>
    );
  }
}

export default Dropdown;
