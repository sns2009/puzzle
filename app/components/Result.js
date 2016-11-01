import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

const Result = (props) => {
  const gameOver = props.gameOver;
  const { gameResult } = props;
  let showResult = 'result-hidden';
  let tries = 'tries';
  let times = 'times';

  if (gameOver === true) showResult = 'result-visible';
  if (gameResult.perfectGame === 1) tries = 'try';
  if (gameResult.userGame === 1) times = 'time';

  return (<div styleName={showResult}>
		<h4>Game Result:</h4>
    <p>Perfect game: {gameResult.perfectGame} {tries}</p>
    <p>You tried: {gameResult.userGame} {times}</p>
  </div>);
};

Result.propTypes = {
  gameResult: React.PropTypes.object,
  gameOver: React.PropTypes.bool,
};

export default CSSModules(Result,styles);
