import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DogPage from "./DogPage";

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src: "hazel",
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
  ],
};

function App(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      <Navbar
        links={props.dogs.map((d) => {
          return { title: d.name, url: d.src };
        })}
        handleClick={() => setExpanded(!expanded)}
        expanded={expanded}
      />

      <div className="page-container">
        <Routes>
          <Route path="/">
            {props.dogs.map((d) => (
              <Route path={d.src} element={<DogPage dog={d} />} />
            ))}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
