import React, { Component } from "react";
import { Link } from "react-router-dom";

class DogPage extends Component {
  render() {
    return (
      <div className="dog-page">
        <h1>
          {this.props.dog.name}, {this.props.dog.age}
        </h1>
        <img
          alt={this.props.dog.name}
          src={"imgs/" + this.props.dog.src + ".jpg"}
        />
        {this.props.dog.facts.map((f) => (
          <li>{f}</li>
        ))}
      </div>
    );
  }
}

export default DogPage;
