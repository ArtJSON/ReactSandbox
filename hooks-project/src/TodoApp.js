import React, { useState } from "react";
import TodoForm from "./TodoForm";
import useInputState from "./hooks";

import "./styles/TodoApp.css";

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="todo-app">
      <h1 className="header">Todo app</h1>
      <TodoForm
        onSubmit={(newItem) => {
          setTodoItems((prev) => [...prev, newItem]);
        }}
      />
      <ul className="tasks">
        {todoItems.map((i) => (
          <li className="task">
            <p className="task-name">{i.name}</p>
            <div className="task-options">
              <div className="task-icon finish">
                <span>&#10003;</span>
              </div>
              <div className="task-icon delete">
                <span>&#10006;</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
