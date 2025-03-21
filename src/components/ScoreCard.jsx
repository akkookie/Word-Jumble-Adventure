import React from "react";
import "../styles/ScoreCard.css";

function ScoreCard({ score }) {
  return (
    <div className="score-card">
      <h3>Score: {score}</h3>
    </div>
  );
}

export default ScoreCard;
