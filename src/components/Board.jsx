import Square from './Square';

const Board = ({ squares, handleSquareClick, winningSquares }) => {
  function renderMySquares(position) {
    return (
      <Square
        value={squares[position]}
        isWinningSquare={winningSquares.includes(position)}
        clicFn={() => handleSquareClick(position)}
      />
    );
  }
  return (
    <div className="board">
      <div className="board-row">
        {renderMySquares(0)}
        {renderMySquares(1)}
        {renderMySquares(2)}
      </div>
      <div className="board-row">
        {renderMySquares(3)}
        {renderMySquares(4)}
        {renderMySquares(5)}
      </div>
      <div className="board-row">
        {renderMySquares(6)}
        {renderMySquares(7)}
        {renderMySquares(8)}
      </div>
    </div>
  );
};

export default Board;
