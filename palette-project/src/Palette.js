import React from "react";
import ColorBox from "./ColorBox";
import "./styles/Palette.css";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Palette(props) {
  const [level, setLevel] = useState(500);

  const colorBoxes = props.palette.colors[level].map((c) => (
    <ColorBox background={c.hex} name={c.name} />
  ));

  return (
    <div className="palette">
      <Navbar
        level={level}
        handleLevel={(newLevel) => {
          setLevel(newLevel);
        }}
      />
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
}
