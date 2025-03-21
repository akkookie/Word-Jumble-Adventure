import React, { useState, useEffect } from "react";
import JumbleGrid from "../components/JumbleGrid";
import ScoreCard from "../components/ScoreCard";
import { questions } from "../utils/questions";
import "../styles/Game.css";

function Game() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledWord, setShuffledWord] = useState([]);

  useEffect(() => {
    shuffleWord();
  }, [currentQuestionIndex]);

  const shuffleWord = () => {
    const word = questions[currentQuestionIndex].answer.split("");
    setShuffledWord(word.sort(() => Math.random() - 0.5));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Game Over! Final Score: " + score);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="game-container">
      <h2>{questions[currentQuestionIndex].question}</h2>
      <JumbleGrid 
        shuffledWord={shuffledWord} 
        correctWord={questions[currentQuestionIndex].answer} 
        setScore={setScore} 
      />
      <button onClick={handleNextQuestion}>Next Question</button>
      <ScoreCard score={score} />
    </div>
  );
}

export default Game;
