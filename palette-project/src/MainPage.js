import React from "react";
import PaletteList from "./PaletteList";
import "./styles/MainPage.css";
import { Link } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className="main-page">
      <nav className="header">
        <h1>React color picker</h1>
        <Link to="/palette/new">Create new palette</Link>
      </nav>
      <PaletteList palettes={props.palettes} />
    </div>
  );
};

export default MainPage;
