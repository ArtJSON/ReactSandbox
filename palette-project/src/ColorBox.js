import React from "react";
import "./styles/ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

export default function ColorBox(props) {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const luminance = chroma(props.background).luminance();
  const _threshold = 0.4;

  const colorClass = luminance > _threshold ? "light" : "dark";

  return (
    <CopyToClipboard text={props.background} onCopy={changeCopyState}>
      <div
        className={`color-box ${colorClass}`}
        style={{ background: props.background }}
      >
        <div
          className={`copy-overlay ${copied ? "show" : ""}`}
          style={{ background: props.background }}
        ></div>
        <div className={`copy-msg ${copied ? "show" : ""}`}>
          <h2>Copied!</h2>
          <p>{props.background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{props.name}</span>
          </div>
          <button className="btn-copy">Copy</button>
        </div>
        {props.paletteid && (
          <Link
            to={`/palette/${props.paletteid}/${props.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="see-more">More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
