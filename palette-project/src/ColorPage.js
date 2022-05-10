import React, { useState } from "react";
import "./styles/ColorPage.css";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import Navbar from "./Navbar";
import { generatePalette } from "./colorHelpers";
import ColorBox from "./ColorBox";

const ColorPage = (props) => {
  let { paletteid, colorid } = useParams();
  const [colorFormat, setColorFormat] = useState("hex");

  // function used to find palette from seedColors based on passed palette id
  const findPalette = (paletteid) => {
    return seedColors.find((palette) => palette.id === paletteid);
  };

  const wholePalette = generatePalette(findPalette(paletteid)).colors;
  const colorPalette = [];

  // filter out redundant colors, leaving array o 10 shades of desired color
  for (let key in wholePalette) {
    colorPalette.push(wholePalette[key].filter((c) => c.id === colorid)[0]);
  }

  // create colorBoxes using obtained colors
  const colorBoxes = colorPalette.map((c, index) =>
    !index ? (
      ""
    ) : (
      <ColorBox background={c[colorFormat]} {...c} paletteid={paletteid} />
    )
  );

  return (
    <div className="color-page">
      <Navbar
        handleFormat={(newFormat) => {
          setColorFormat(newFormat);
        }}
      />
      <div className="color-boxes">{colorBoxes}</div>
      <footer className="palette-footer"></footer>
    </div>
  );
};

export default ColorPage;
