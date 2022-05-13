import React from "react";
import "./styles/TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="task">
      <p className={`task-name ${props.finished && "finished"}`}>
        {props.name}
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
