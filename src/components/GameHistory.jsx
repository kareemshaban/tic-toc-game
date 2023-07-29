const Gamehistory = ({ history, moveTo, currentMove }) => {
  console.log(history);
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((val, index) =>
          index > 0 ? (
            <li key={index}>
              <button
                type="button"
                className={`btn-move ${currentMove === index ? 'active' : ''}`}
                onClick={() => moveTo(index)}
              >
                {' '}
                Go To Move #{index}{' '}
              </button>
            </li>
          ) : (
            <li key={index}>
              <button
                type="button"
                className={`btn-move ${currentMove === index ? 'active' : ''}`}
              >
                Game Starts
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Gamehistory;
