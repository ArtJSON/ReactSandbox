import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pepsi extends Component {
  render() {
    return (
      <div className="pepsi-container">
        <img
          className="pepsi"
          alt="pepsi #1"
          src="https://img.cppng.com/download/2020-06/3-2-pepsi-transparent.png"
        />
        <Link className="btn" to="/">
          Go back
        </Link>
        <img
          className="pepsi"
          alt="pepsi #2"
          src="https://img.cppng.com/download/2020-06/3-2-pepsi-transparent.png"
        />
      </div>
    );
  }
}

export default Pepsi;
