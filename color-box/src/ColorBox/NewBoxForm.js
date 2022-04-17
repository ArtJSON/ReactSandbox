import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "", height: "", width: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO append color to Box array
    this.props.handleNewBox({
      color: this.state.color,
      height: this.state.height,
      width: this.state.width,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="color"></label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder="color"
            onChange={this.handleChange}
          ></input>

          <label htmlFor="height"></label>
          <input
            type="text"
            id="height"
            name="height"
            placeholder="height"
            onChange={this.handleChange}
          ></input>

          <label htmlFor="width"></label>
          <input
            type="text"
            id="width"
            name="width"
            placeholder="width"
            onChange={this.handleChange}
          ></input>

          <button>Add a new box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
