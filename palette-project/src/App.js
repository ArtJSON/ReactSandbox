import Palette from "./Palette";
import MainPage from "./MainPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/palette/:id" element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;
