import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "horse", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
}
const App = () => {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  // you can create a function that returns an element
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="app">
      {/* you can run map function in jsx with the help of curly brackets
      <ul>
        {animals.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul> */}
      <button className="btn btn-primary" onClick={handleClick}>
        Add Animal
      </button>
      <div>{renderedAnimals}</div>
    </div>
  );
};

export default App;
