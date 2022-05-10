import React from "react";
import "./styles/ColorPage.css";
import { useParams, useLocation } from "react-router-dom";
import seedColors from "./seedColors";
import Navbar from "./Navbar";
import { generatePalette } from "./colorHelpers";

const ColorPage = (props) => {
  let { paletteid, colorid } = useParams();

  const findPalette = (paletteid) => {
    return seedColors.find((palette) => palette.id === paletteid);
  };

  const wholePalette = generatePalette(findPalette(paletteid)).colors;
  const colorPalette = [];

  for (let key in wholePalette) {
    colorPalette.push(wholePalette[key].filter((c) => c.id === colorid)[0]);
  }

  return (
    <div className="color-page">
      <Navbar />

      <footer className="palette-footer"></footer>
    </div>
  );
};

export default ColorPage;
