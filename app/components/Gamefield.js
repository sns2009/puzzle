import React from 'react';
import CSSModules from 'react-css-modules';
import Card from './Card';
import styles from '../../css/style.css';


class Gamefield extends React.Component {

  createCards() {
    const cards = this.props.cards;
    const boxes = cards.map((el, i) => {
      return (<Card key={i}
        cardNumber={i}
        cards={this.props.cards}
        gameParams={this.props.gameParams}
        currentlyOpened={this.props.currentlyOpened}
        gameFieldSize={this.props.gameFieldSize}
        triggerGameField={this.props.triggerGameField}
        changeCardsStatus={this.props.changeCardsStatus}
        deleteCurrentlyOpened={this.props.deleteCurrentlyOpened}
        incrementTries={this.props.incrementTries}
        gameOver={this.props.gameOver}
        addToCurrentlyOpened={this.props.addToCurrentlyOpened}
        firstCardClicked={this.props.firstCardClicked}
      />);
    });
    return boxes;
  }

  render() {
    const { gameParams } = this.props;
    const gameFieldSize = this.props.gameFieldSize;
    let gameFieldContainer = (<div style={{
      lineHeight: `${gameFieldSize.height / 2}px` }}>
      <h1>WELCOME</h1>
      <h2>Choose game params &#8594;</h2></div>);
    if (gameParams.gameStarted) gameFieldContainer = this.createCards();

    return (<div styleName="gamefield" style={gameFieldSize}>
      {
              gameFieldContainer
              }
    </div>);
  }


}
Gamefield.propTypes = {
  cards: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      opened: React.PropTypes.bool,
      imageId: React.PropTypes.number
    })),
  gameParams: React.PropTypes.shape({
      gameStarted: React.PropTypes.bool,
      gameOver: React.PropTypes.bool,
      prevFieldSize: React.PropTypes.number,
      fieldSize: React.PropTypes.number,
      sameCards: React.PropTypes.array,
      chosenSameCardQuantity: React.PropTypes.number,
      fieldBlocked: React.PropTypes.bool,
      firstCardCliked: React.PropTypes.bool
    }),
  currentlyOpened: React.PropTypes.arrayOf(React.PropTypes.number),
  gameFieldSize: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number
  }),
  triggerGameField: React.PropTypes.func,
  changeCardsStatus: React.PropTypes.func,
  deleteCurrentlyOpened: React.PropTypes.func,
  incrementTries: React.PropTypes.func,
  gameOver: React.PropTypes.func,
  addToCurrentlyOpened: React.PropTypes.func,
  firstCardClicked: React.PropTypes.func,
};
export default CSSModules(Gamefield, styles);