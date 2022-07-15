import React from "react";
import "./styles.css";

function Game({ verifyLetter }) {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Verificar</button>
    </div>
  );
}

export default Game;
