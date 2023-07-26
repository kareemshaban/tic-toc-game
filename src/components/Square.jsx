function Square({ value, clicFn }) {
  return (
    <button type="button" className="square" onClick={clicFn}>
      {value}
    </button>
  );
}

export default Square;
