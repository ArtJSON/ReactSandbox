import React from "react";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import "./styles/MainPage.css";

const MainPage = (props) => {
  return (
    <div className="main-page">
      <PaletteList palettes={seedColors} />
    </div>
  );
};

export default MainPage;
