import React, { useState } from "react";
import useInputState from "./hooks";

const TodoForm = (props) => {
  const [task, handleTask, clearTask] = useInputState("");

  return (
    <div className="todo-form">
      <form
        onSubmit={(e) => {
          props.onSubmit({ name: task, finished: false });
          clearTask();
          e.preventDefault();
        }}
      >
        <label htmlFor="task">Enter the task:</label>
        <input type="text" name="task" id="task" onInput={handleTask} />
      </form>
    </div>
  );
};

export default TodoForm;
