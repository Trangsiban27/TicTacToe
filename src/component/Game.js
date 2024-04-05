import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = isXNext ? "X" : "O";

    setBoard(boardCopy);
    setIsXNext((isXNext) => !isXNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <Board cells={board} onClick={handleClick}></Board>
      {winner ? (
        <div>
          <p className="winner">Winner is {isXNext ? "O" : "X"} </p>
          <button className="button-reset" onClick={handleResetGame}>
            Reset game?
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
