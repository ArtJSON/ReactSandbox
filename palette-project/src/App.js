import Palette from "./Palette";
import MainPage from "./MainPage";
import ColorPage from "./ColorPage";
import NewPaletteForm from "./NewPaletteForm";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/palette/:id" element={<Palette />} />
        <Route
          exact
          path="/palette/:paletteid/:colorid"
          element={<ColorPage />}
        />
        <Route exact path="/palette/new" element={<NewPaletteForm />} />
      </Routes>
    </div>
  );
}

export default App;
