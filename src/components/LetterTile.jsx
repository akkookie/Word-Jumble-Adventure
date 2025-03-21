import React from "react";
import "../styles/LetterTile.css";

function LetterTile({ letter, onDrop }) {
  return (
    <div 
      className="letter-tile"
      onClick={() => onDrop(letter)}
    >
      {letter}
    </div>
  );
}

export default LetterTile;
