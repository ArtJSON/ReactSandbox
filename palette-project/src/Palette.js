import React from "react";
import ColorBox from "./ColorBox";
import "./styles/Palette.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Palette(props) {
  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("");
  useEffect(() => {
    setColorFormat("hex");
  }, []);

  const colorBoxes = props.palette.colors[level].map((c) => (
    <ColorBox background={c[colorFormat]} name={c.name} />
  ));

  return (
    <div className="palette">
      <Navbar
        level={level}
        handleLevel={(newLevel) => {
          setLevel(newLevel);
        }}
        handleFormat={(newFormat) => {
          setColorFormat(newFormat);
        }}
      />
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
}
