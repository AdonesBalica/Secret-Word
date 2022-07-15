import React from "react";
import "./styles.css";

function GameOver({ retry }) {
  return (
    <div>
      <h1>Recomeçar jogo</h1>
      <button onClick={retry}>Recomeçar</button>
    </div>
  );
}

export default GameOver;
