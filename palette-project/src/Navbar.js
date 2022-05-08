import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./styles/Navbar.css";

export default function Navbar(props) {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="#">ReactColorPicker</a>
      </div>
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
    </header>
  );
}
