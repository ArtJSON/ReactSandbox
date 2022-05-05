import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
