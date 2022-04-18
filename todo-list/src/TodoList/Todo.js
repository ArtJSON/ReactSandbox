import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing, task: this.props.task });
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.changeTodo(this.props.id, this.state.task);
    this.toggleEdit();
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              id="task"
              name="task"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <button>Save</button>
            <button onClick={this.toggleEdit}>Abort</button>
          </form>
        </div>
      );
    } else {
      result = (
        <li>
          <button onClick={this.handleRemove}>x</button>
          <button onClick={this.toggleEdit}>Edit</button>
          <p
            onClick={this.handleToggle}
            className={this.props.completed ? "Completed" : ""}
          >
            {this.props.task}
          </p>
        </li>
      );
    }
    return result;
  }
}

export default Todo;
