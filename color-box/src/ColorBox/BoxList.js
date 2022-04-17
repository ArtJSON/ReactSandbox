import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.createNewBox = this.createNewBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  createNewBox(box) {
    const newBox = { ...box, id: uuidv4() };
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }

  removeBox(id) {
    const newBoxes = this.state.boxes.filter((b) => {
      return b.id !== id;
    });

    this.setState({ boxes: newBoxes });
  }

  render() {
    return (
      <div>
        <h1>Color box maker</h1>
        <NewBoxForm handleNewBox={this.createNewBox} />
        {this.state.boxes.map((b) => {
          return (
            <div key={b.id} className="box-container">
              <Box color={b.color} height={b.height} width={b.width} />
              <button onClick={() => this.removeBox(b.id)}>
                Delete this box
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BoxList;
