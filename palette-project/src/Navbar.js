import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./styles/Navbar.css";

import { Select, MenuItem } from "@material-ui/core";

export default function Navbar(props) {
  return (
    <header className="navbar">
      <div className="logo-slider-container">
        <div className="logo">
          <a href="/">ReactColorPicker</a>
        </div>
        {props.levelSlider && (
          <div className="slider-container">
            <span>Level: {props.level}</span>
            <Slider
              className="slider"
              defaultValue={props.level}
              min={100}
              max={900}
              step={100}
              trackStyle={{ backgroundColor: "#36c7c9", height: 8 }}
              handleStyle={{ borderColor: "#36c7c9", height: 16, width: 16 }}
              railStyle={{ backgroundColor: "#cfcfcf", height: 8 }}
              onAfterChange={(newLevel) => {
                props.handleLevel(newLevel);
              }}
            />
          </div>
        )}
      </div>
      <div className="select-container">
        <Select
          defaultValue="hex"
          onChange={(event) => {
            props.handleFormat(event.target.value);
          }}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
}
