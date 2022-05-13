import React, { useState } from "react";
import useInputState from "./hooks";

const TodoForm = (props) => {
  const [task, handleTask, clearTask] = useInputState("");

  return (
    <div className="todo-form">
      <label htmlFor="task">Enter the task:</label>
      <input
        value={task}
        type="text"
        name="task"
        id="task"
        onInput={handleTask}
      />
      <button
        onClick={() => {
          props.onSubmit({ name: task, finished: false });
          clearTask();
        }}
      >
        Add task
      </button>
    </div>
  );
};

export default TodoForm;
