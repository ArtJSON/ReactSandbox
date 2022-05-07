import React from "react";
import ColorBox from "./ColorBox";
import "./styles/Palette.css";

export default function Palette(props) {
  const colorBoxes = props.colors.map((c) => (
    <ColorBox background={c.color} name={c.name} />
  ));

  return (
    <div className="palette">
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
}
