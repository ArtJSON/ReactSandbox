import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  render() {
    return (
      <div className="joke">
        <div className="joke-btns">
          <i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
          <span>{this.props.votes}</span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
        </div>
        <div className="joke-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
