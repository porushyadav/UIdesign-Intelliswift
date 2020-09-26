import React, { Component } from "react";
import "./index";
class Information extends Component {
  render() {
    console.log(this.props);
    const { value } = this.props;
    return (
      <div class="Information">
        {value === "1" ? (
          <p>
            React. js is an open-source JavaScript library that is used for
            building user interfaces specifically for single-page applications.
            ... React allows developers to create large web applications that
            can change data, without reloading the page. The main purpose of
            React is to be fast, scalable, and simple.
          </p>
        ) : value === "2" ? (
          <p>
            Node. js is primarily used for non-blocking, event-driven servers,
            due to its single-threaded nature. It's used for traditional web
            sites and back-end API services, but was designed with real-time,
            push-based architectures in mind.
          </p>
        ) : value === "3" ? (
          <p>
            MongoDB stores data in flexible, JSON-like documents, meaning fields
            can vary from document to document and data structure can be changed
            over time.The document model maps to the objects in your application
            code, making data easy to work with
          </p>
        ) : null}
      </div>
    );
  }
}

export default Information;
