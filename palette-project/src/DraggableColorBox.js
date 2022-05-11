import "./styles/DraggableColorBox.css";
import DeleteIcon from "@material-ui/icons/Delete";
const DraggableColorBox = (props) => {
  return (
    <div
      className="draggable-color-box"
      style={{ backgroundColor: props.color }}
    >
      <div className="draggable-box-content">
        <span>{props.name}</span>
        <DeleteIcon onClick={props.delete} />
      </div>
    </div>
  );
};

export default DraggableColorBox;
