import React from 'react';

function ResetButton({ onClick }) {
  return (
    <button className="reset-button" onClick={onClick}>
      Reset Game
    </button>
  );
}

export default ResetButton;