import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import "./styles/PaletteList.css";

const PaletteList = (props) => {
  return (
    <div className="palette-list">
      {props.palettes.map((p) => (
        <Link key={p.id} to={`/palette/${p.id}`}>
          <MiniPalette {...p} />
        </Link>
      ))}
    </div>
  );
};

export default PaletteList;
