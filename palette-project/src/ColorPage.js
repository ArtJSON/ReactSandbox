import React from "react";
import "./styles/ColorPage.css";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import Navbar from "./Navbar";

const ColorPage = (props) => {
  let { paletteid, colorid } = useParams();

  const findColor = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  console.log(findColor(paletteid));

  return (
    <div className="color-page">
      <Navbar />
      {colorid}
      <footer className="palette-footer"></footer>
    </div>
  );
};

export default ColorPage;
