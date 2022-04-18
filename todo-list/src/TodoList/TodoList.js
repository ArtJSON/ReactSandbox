import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk the fish", id: uuid(), completed: false }],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.change = this.change.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  remove(id) {
    this.setState({ todos: this.state.todos.filter((t) => t.id !== id) });
  }

  change(id, task) {
    let newTodos = this.state.todos.map((t) => {
      if (t.id === id) {
        return { ...t, task };
      } else {
        return t;
      }
    });
    this.setState({ todos: newTodos });
  }

  toggleCompletion(id) {
    let newTodos = this.state.todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      } else {
        return t;
      }
    });
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          {this.state.todos.map((t) => {
            return (
              <Todo
                key={t.id}
                id={t.id}
                completed={t.completed}
                task={t.task}
                removeTodo={this.remove}
                changeTodo={this.change}
                toggleTodo={this.toggleCompletion}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
