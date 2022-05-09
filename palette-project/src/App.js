import Palette from "./Palette";

import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<h1>DAsdadsd</h1>} />
        <Route path="/palette/:id" element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;
