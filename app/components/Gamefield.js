import React from 'react';
import Card from './Card';


export default class Gamefield extends React.Component {

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
    let gameFieldContainer = (<div style={{ textAlign: 'center', lineHeight: `${gameFieldSize.height / 2}px` }}><h1>WELCOME</h1>
      <h2>Choose game params &#8594;</h2></div>);
    if (gameParams.gameStarted) gameFieldContainer = this.createCards();

    return (<div className="gamefield" style={gameFieldSize}>
      {
              gameFieldContainer
              }
    </div>);
  }


}
Gamefield.propTypes = {
  cards: React.PropTypes.array,
  gameFieldSize: React.PropTypes.object,
  gameParams: React.PropTypes.object,
  currentlyOpened: React.PropTypes.array,
  triggerGameField: React.PropTypes.func,
  changeCardsStatus: React.PropTypes.func,
  deleteCurrentlyOpened: React.PropTypes.func,
  incrementTries: React.PropTypes.func,
  gameOver: React.PropTypes.func,
  addToCurrentlyOpened: React.PropTypes.func,
  firstCardClicked: React.PropTypes.func,
};
