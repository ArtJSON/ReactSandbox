import React, { Component } from "react";
import { randomInt } from "../../utils";

class Doritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doritos: [],
    };
    this.incrementDoritos = this.incrementDoritos.bind(this);
  }

  incrementDoritos() {
    this.setState({
      doritos: [
        ...this.state.doritos,
        { top: randomInt(0, 100), left: randomInt(0, 100) },
      ],
    });
  }

  render() {
    return (
      <div className="doritos-container">
        <div className="btn-container">
          <button className="btn" onClick={this.incrementDoritos}>
            Get more! <span>{this.state.doritos.length}</span>
          </button>
        </div>
        <div className="btn-container">
          {this.state.doritos.map((d, it) => (
            <img
              alt={`Bag #${it}`}
              src="https://pngpress.com/wp-content/uploads/2020/08/uploads_doritos_doritos_PNG5.png"
              style={{ top: d.top + "%", left: d.left + "%" }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Doritos;
