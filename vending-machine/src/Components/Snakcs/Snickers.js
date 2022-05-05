import React, { Component } from "react";
import { Link } from "react-router-dom";

class Snickers extends Component {
  render() {
    return (
      <div className="pepsi-container">
        <Link className="btn" to="/">
          Go back
        </Link>
      </div>
    );
  }
}

export default Snickers;
