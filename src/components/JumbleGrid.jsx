import React, { useState } from "react";
import LetterTile from "./LetterTile";
import "../styles/JumbleGrid.css";

function JumbleGrid({ shuffledWord, correctWord, setScore }) {
  const [userInput, setUserInput] = useState([]);

  const handleDrop = (letter) => {
    setUserInput([...userInput, letter]);
  };

  const checkAnswer = () => {
    if (userInput.join("") === correctWord) {
      setScore(prev => prev + 10);
      alert("Correct!");
    } else {
      alert("Try Again!");
    }
    setUserInput([]);
  };

  return (
    <div className="jumble-grid">
      <div className="tiles">
        {shuffledWord.map((letter, index) => (
          <LetterTile key={index} letter={letter} onDrop={handleDrop} />
        ))}
      </div>
      <div className="answer-box">
        {userInput.join(" ")}
      </div>
      <button onClick={checkAnswer}>Submit</button>
    </div>
  );
}

export default JumbleGrid;
