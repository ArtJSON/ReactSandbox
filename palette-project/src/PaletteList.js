import React from "react";
import { Link } from "react-router-dom";

const PaletteList = (props) => {
  console.log(props);

  return (
    <div className="palette-list">
      {props.palettes.map((p) => (
        <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
      ))}
    </div>
  );
};

export default PaletteList;
