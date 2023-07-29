const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const player = isXNext ? 'X' : 'O';
  const msg = winner
    ? `Winner is ${winner}`
    : squares.filter(c => c == null).length > 0
    ? `next Player is ${player}`
    : 'Draw :(';
  return (
    <div
      className={`status-message ${
        player === 'X' ? 'text-orange' : 'text-green'
      }`}
    >
      {' '}
      {msg}
    </div>
  );
};

export default StatusMessage;
