import React from "react";
import "./styles/ColorBox.css";

export default function ColorBox(props) {
  return (
    <div className="color-box" style={{ background: props.background }}>
      <div className="copy-container">
        <div className="box-content">
          <span>{props.name}</span>
        </div>
        <button className="btn-copy">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
}
