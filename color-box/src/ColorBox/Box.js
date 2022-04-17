import React, { Component } from "react";

class Box extends Component {
  static defaultProps = {
    color: "red",
    width: 10,
    height: 10,
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.color,
          height: this.props.height * 20 + "px",
          width: this.props.width * 20 + "px",
        }}
      ></div>
    );
  }
}

export default Box;
