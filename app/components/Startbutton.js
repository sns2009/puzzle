import React from 'react';
import R from 'ramda';


export default class Startbutton extends React.Component {

  constructor(props) {
    super(props);
	    this.state = {
	    	lackOfParams: '',
	    };
  	}

  	start() {
    const { gameParams } = this.props;
  		if (R.isEmpty(gameParams.sameCards) || R.isNil(gameParams.chosenSameCard)) {
  			this.setState({ lackOfParams: 'Choose game settings above' });
  		} else {
  			this.setState({ lackOfParams: '' });
    this.props.setFieldSize(gameParams.prevFieldSize);
  			this.props.startGame(true);
    this.props.gameOver(false);
    this.props.setPerfectTriesNumber(gameParams.fieldSize * gameParams.fieldSize / gameParams.chosenSameCard);
  			this.props.resetTries();
    this.props.deleteCurrentlyOpened();
    this.props.firstCardClicked(false);
    this.props.generateGame();
  		}
  	}

  	render() {
  		return (<div>
    <button onClick={this.start.bind(this)} style={{ marginTop: '20px' }}>
  			Here we go!
  	</button>
    <div style={{ color: 'red', marginTop: '15px' }}>{this.state.lackOfParams}</div>
  			</div>);
  	}

}
Startbutton.propTypes = {
  gameParams: React.PropTypes.object,
  setFieldSize: React.PropTypes.func,
  startGame: React.PropTypes.func,
  gameOver: React.PropTypes.func,
  setPerfectTriesNumber: React.PropTypes.func,
  resetTries: React.PropTypes.func,
  deleteCurrentlyOpened: React.PropTypes.func,
  firstCardClicked: React.PropTypes.func,
  generateGame: React.PropTypes.func,
};
