import React from "react";
import "./styles/ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ColorBox(props) {
  return (
    <CopyToClipboard text={props.background}>
      <div className="color-box" style={{ background: props.background }}>
        <div
          className="copy-overlay"
          style={{ background: props.background }}
        ></div>
        <div className="copy-container">
          <div className="box-content">
            <span>{props.name}</span>
          </div>
          <button className="btn-copy">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}
