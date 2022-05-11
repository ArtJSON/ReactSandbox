import "./styles/DraggableColorBox.css";

const DraggableColorBox = (props) => {
  return (
    <div
      className="draggable-color-box"
      style={{ backgroundColor: props.color }}
    ></div>
  );
};

export default DraggableColorBox;
