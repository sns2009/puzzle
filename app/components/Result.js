import React from 'react';

const Result = (props) => {
  const gameOver = props.gameOver;
  const { gameResult } = props;
  let showResult = 'hidden';
  let tries = 'tries';
  let times = 'times';

  if (gameOver === true) showResult = 'visible animated';
  if (gameResult.perfectGame === 1) tries = 'try';
  if (gameResult.userGame === 1) times = 'time';

  return (<div id="result" className={showResult}>
		<h4>Game Result:</h4>
    <p>Perfect game: {gameResult.perfectGame} {tries}</p>
    <p>You tried: {gameResult.userGame} {times}</p>
  </div>);
};

Result.propTypes = {
  gameResult: React.PropTypes.object,
  gameOver: React.PropTypes.bool,
};

export default Result;
