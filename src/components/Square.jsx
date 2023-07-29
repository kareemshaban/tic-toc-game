function Square({ value, clicFn, isWinningSquare }) {
  return (
    <button
      type="button"
      onClick={clicFn}
      className={`square ${isWinningSquare ? 'winning' : ''}   ${
        value == 'X' ? 'text-green' : 'text-orange'
      } `}
    >
      {value}
    </button>
  );
}

export default Square;
