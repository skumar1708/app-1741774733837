import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import ResetButton from '../components/ResetButton';
import WinnerPopup from '../components/WinnerPopup';
import '../App.css';

function GamePage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  useEffect(() => {
    checkWinner();
  }, [board]);

  const checkWinner = () => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setShowPopup(true);
        break;
      }
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? '@' : 'X');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setShowPopup(false);
  };

  return (
    <div className="game-container">
      <Board board={board} onClick={handleClick} />
      <ResetButton onClick={resetGame} />
      {showPopup && <WinnerPopup winner={winner} onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default GamePage;