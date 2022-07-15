import React from "react";
import "./styles.css";

function Game({
  verifyLetter,
  pickedWord,
  pickedCategory,
  guesses,
  letters,
  gessedLetters,
  wrongLetters,
  score,
}) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra:<span>{pickedCategory}</span>
      </h3>
      <p>Você tem ainda {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          gessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blackSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </div>
  );
}

export default Game;
