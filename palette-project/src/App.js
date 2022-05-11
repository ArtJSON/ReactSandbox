import Palette from "./Palette";
import MainPage from "./MainPage";
import ColorPage from "./ColorPage";
import NewPaletteForm from "./NewPaletteForm";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import seedColors from "./seedColors";

function App() {
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    setPalettes(seedColors);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage palettes={palettes} />} />
        <Route
          exact
          path="/palette/:id"
          element={<Palette palettes={palettes} />}
        />
        <Route
          exact
          path="/palette/:paletteid/:colorid"
          element={<ColorPage palettes={palettes} />}
        />
        <Route
          exact
          path="/palette/new"
          element={
            <NewPaletteForm
              addPalette={(newPalette) => {
                setPalettes((prev) => [...prev, newPalette]);
              }}
              names={palettes.map((p) => p.paletteName)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
