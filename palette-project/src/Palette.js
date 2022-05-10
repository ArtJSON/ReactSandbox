import React from "react";
import ColorBox from "./ColorBox";
import "./styles/Palette.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

export default function Palette(props) {
  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");
  let { id } = useParams();

  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  const palette = generatePalette(findPalette(id));

  const colorBoxes = palette.colors[level].map((c) => (
    <ColorBox background={c[colorFormat]} {...c} key={c.id} paletteid={id} />
  ));

  return (
    <div className="palette">
      <Navbar
        levelSlider
        level={level}
        handleLevel={(newLevel) => {
          setLevel(newLevel);
        }}
        handleFormat={(newFormat) => {
          setColorFormat(newFormat);
        }}
      />
      <div className="palette-colors">{colorBoxes}</div>
      <footer className="palette-footer">
        {palette.paletteName} {palette.emoji}
      </footer>
    </div>
  );
}
