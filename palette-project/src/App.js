import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
        <Route path="/palette/:id" element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;
