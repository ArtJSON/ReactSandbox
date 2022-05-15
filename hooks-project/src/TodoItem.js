import React from "react";
import "./styles/TodoItem.css";
import { useState } from "react";

const TodoItem = (props) => {
  return (
    <li className="task">
      <p className={`task-name ${props.finished && "finished"}`}>
        {props.edit ? (
          <input
            type="text"
            name="task"
            id="task"
            defaultValue={props.name}
            onChange={(e) => {
              props.handleUpdate(e.target.value);
            }}
          />
        ) : (
          props.name
        )}
      </p>
      <div className="task-options">
        <div className="task-icon finish" onClick={props.handleState}>
          <span>&#10003;</span>
        </div>
        <div className="task-icon delete" onClick={props.handleDelete}>
          <span>&#10006;</span>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
