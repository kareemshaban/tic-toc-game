import Board from './components/Board';
import './styles.scss';
import { useState } from 'react';
import StatusMessage from './components/StatusMessage';
import { calculateResult } from './result';
import Gamehistory from './components/GameHistory';
import ResetBtn from './components/ResetBtn';
function App() {
  const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calculateResult(gamingBoard.squares);
  function handleSquareClick(clickedPosition) {
    if (gamingBoard.squares[clickedPosition] == null && winner == null) {
      setHistory(currentHistory => {
        let isBacktoHistory = currentMove + 1 !== history.length; //false normal behaviour , true history behaviour
        console.log(isBacktoHistory);
        let lastGamingBoard = isBacktoHistory
          ? currentHistory[currentMove]
          : history[history.length - 1];

        let nextGamingBoard = lastGamingBoard.squares.map((val, position) => {
          if (clickedPosition === position) {
            val = lastGamingBoard.isXNext ? 'X' : 'O';
          }
          return val;
        });

        let base = isBacktoHistory
          ? currentHistory.slice(0, currentMove + 1)
          : currentHistory;
        return base.concat({
          squares: nextGamingBoard,
          isXNext: !lastGamingBoard.isXNext,
        });
      });

      setCurrentMove(lastMove => lastMove + 1);
    }
  }
  function moveTo(move) {
    setCurrentMove(move);
  }

  function reset() {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <div className="app">
      <StatusMessage gamingBoard={gamingBoard} winner={winner} />
      <Board
        handleSquareClick={handleSquareClick}
        squares={gamingBoard.squares}
        winningSquares={winningSquares}
      />
      <button className={`btn-reset ${winner ? 'active' : ''}`} onClick={reset}>
        Reset Game
      </button>
      <h2>Curren Game History</h2>
      <Gamehistory
        history={history}
        moveTo={moveTo}
        currentMove={currentMove}
      />
    </div>
  );
}

export default App;
