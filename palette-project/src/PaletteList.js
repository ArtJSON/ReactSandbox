import React from "react";
import { useNavigate } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import "./styles/PaletteList.css";

const PaletteList = (props) => {
  const navigate = useNavigate();
  return (
    <div className="palette-list">
      {props.palettes.map((p) => (
        <MiniPalette
          key={p.id}
          {...p}
          handleClick={() => navigate(`/palette/${p.id}`)}
        />
      ))}
    </div>
  );
};

export default PaletteList;
