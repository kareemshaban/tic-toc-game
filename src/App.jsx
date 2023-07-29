import Board from './components/Board';
import './styles.scss';
import { useState } from 'react';
import { calculateResult } from './result';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateResult(squares);
  console.log(winner);
  const player = isXNext ? 'X' : 'O';
  const msg = winner
    ? `Winner is ${winner}`
    : squares.filter(c => c == null).length > 0
    ? `next Player is ${player}`
    : 'Draw :(';
  function handleSquareClick(clickedPosition) {
    if (squares[clickedPosition] == null && winner == null) {
      setSquares(currentSquares => {
        return currentSquares.map((val, position) => {
          if (clickedPosition === position) {
            val = isXNext ? 'X' : 'O';
          }
          return val;
        });
      });

      setIsXNext(currentIsXNext => {
        return !currentIsXNext;
      });
    }
  }

  return (
    <div className="app">
      <h2>{msg}</h2>
      <Board handleSquareClick={handleSquareClick} squares={squares} />
    </div>
  );
}

export default App;
