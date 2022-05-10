import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import "./styles/PaletteList.css";

const PaletteList = (props) => {
  console.log(props);

  return (
    <div className="palette-list">
      {props.palettes.map((p) => (
        <div>
          <Link to={`/palette/${p.id}`}>
            <MiniPalette {...p} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PaletteList;
