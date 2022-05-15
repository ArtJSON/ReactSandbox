import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import "./styles/TodoApp.css";

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);

  const deleteItem = (item) => {
    setTodoItems((prev) => prev.filter((i) => i != item));
  };

  const toggleState = (item) => {
    setTodoItems((prev) =>
      prev.map((i) => (i == item ? { name: i.name, finished: !i.finished } : i))
    );
  };

  const updateTask = (item, newTask) => {
    setTodoItems((prev) =>
      prev.map((i) => (i == item ? { name: newTask, finished: i.finished } : i))
    );
  };

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
          <TodoItem
            name={i.name}
            finished={i.finished}
            handleDelete={() => deleteItem(i)}
            handleUpdate={(newTask) => updateTask(i, newTask)}
            handleState={() => toggleState(i)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
