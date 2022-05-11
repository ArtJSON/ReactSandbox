import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import "./styles/DraggableColorList.css";

const DraggableColorList = SortableContainer((props) => {
  return (
    <div className="draggable-color-boxes">
      {props.colors.map((c, index) => (
        <DraggableColorBox
          {...c}
          index={index}
          key={c.name}
          delete={() => {
            props.deleteColor(c.name);
          }}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
