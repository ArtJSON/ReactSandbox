import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";

import Doritos from "./Components/Snakcs/Doritos";
import Pepsi from "./Components/Snakcs/Pepsi";
import Snickers from "./Components/Snakcs/Snickers";
import VendingMachine from "./Components/VendingMachine";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink exact to="/" className="nav-link" activeClassName="selected">
          Home
        </NavLink>
        <NavLink
          exact
          to="/doritos"
          className="nav-link"
          activeClassName="selected"
        >
          Doritos
        </NavLink>
        <NavLink
          exact
          to="/pepsi"
          className="nav-link"
          activeClassName="selected"
        >
          Pepsi
        </NavLink>
        <NavLink
          exact
          to="/snickers"
          className="nav-link"
          activeClassName="selected"
        >
          Snickers
        </NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route exact path="/doritos" element={<Doritos />} />
        <Route exact path="/pepsi" element={<Pepsi />} />
        <Route exact path="/snickers" element={<Snickers />} />
      </Routes>
    </div>
  );
}

export default App;
