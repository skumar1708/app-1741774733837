import React from 'react';

function WinnerPopup({ winner, onClose }) {
  return (
    <div className="winner-popup">
      <div className="winner-content">
        <h2>Congratulations {winner}!</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default WinnerPopup;