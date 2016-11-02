import React from 'react';
import R from 'ramda';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';


class Startbutton extends React.Component {

  constructor(props) {
    super(props);
	    this.state = {
	    	lackOfParams: '',
	    };
    this.start = this.start.bind(this);
  	}

  	start() {
    const { gameParams } = this.props;
  		if (R.isEmpty(gameParams.sameCards) || R.isNil(gameParams.chosenSameCardQuantity)) {
  			this.setState({ lackOfParams: 'Choose game settings above' });
  		} else {
  			this.setState({ lackOfParams: '' });
    this.props.setFieldSize(gameParams.prevFieldSize);
  			this.props.startGame(true);
    this.props.gameOver(false);
    this.props.setPerfectTriesNumber(gameParams.fieldSize * gameParams.fieldSize / gameParams.chosenSameCardQuantity);
  			this.props.resetTries();
    this.props.deleteCurrentlyOpened();
    this.props.firstCardClicked(false);
    this.props.generateGame();
  		}
  	}

  	render() {
  		return (<div>
    <button onClick={this.start} styleName="startButton">
  			Here we go!
  	</button>
    <div styleName="lackOfParams">{this.state.lackOfParams}</div>
  			</div>);
  	}

}

Startbutton.propTypes = {
  gameParams: React.PropTypes.shape({
    gameStarted: React.PropTypes.bool,
    gameOver: React.PropTypes.bool,
    prevFieldSize: React.PropTypes.number,
    fieldSize: React.PropTypes.number,
    sameCards: React.PropTypes.array,
    chosenSameCardQuantity: React.PropTypes.number,
    fieldUnblocked: React.PropTypes.bool,
    firstCardClicked: React.PropTypes.bool
  }),
  setFieldSize: React.PropTypes.func,
  startGame: React.PropTypes.func,
  gameOver: React.PropTypes.func,
  setPerfectTriesNumber: React.PropTypes.func,
  resetTries: React.PropTypes.func,
  deleteCurrentlyOpened: React.PropTypes.func,
  firstCardClicked: React.PropTypes.func,
  generateGame: React.PropTypes.func,
};

export default CSSModules(Startbutton, styles);