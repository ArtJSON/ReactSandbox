import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MathOperations from "./MathOperation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<h1>Hello</h1>} />
        <Route path="/:operation/:n1/:n2" element={<MathOperations />} />
      </Routes>
    </div>
  );
}

export default App;
