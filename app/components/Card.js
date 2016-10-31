import React from 'react';
import R from 'ramda';
import imagePath from '../imagesPath';


export default class Card extends React.Component {

  onCardClick(e) {
    const gameParams = this.props.gameParams;
    const currentlyOpened = this.props.currentlyOpened;
    const cards = this.props.cards;
    let leftOpenedCards = [];

    e.preventDefault();
    this.props.firstCardClicked(true);
    if (gameParams.fieldBlocked) {
      if (!cards[this.props.cardNumber].opened) {
      // Open card
        this.props.changeCardStatus(this.props.cardNumber, true);
      // Add card to currently opened cards
        if (currentlyOpened[R.length(currentlyOpened) - 1] !== this.props.cardNumber) {
          this.props.addToCurrentlyOpened(this.props.cardNumber);


      // If in curently opened cards all cards have same bg ond their quantity less than sameCardChosen
      // - don't close

      // If in curently opened cards all cards have same bg and their quantity equals sameCardChosen
      // - don't clase, but erase curently opened array

      // If in currently opened cards some bg differs from other(s)
      // - block gamefield and CLOSE cards, after anblack gamefield


          if (cards[R.head(currentlyOpened)].imageId !==
            cards[R.last(currentlyOpened)].imageId) {
            this.props.triggerGameField(false);
            setTimeout(() => {
              R.forEach(el => this.props.changeCardStatus(el, false), currentlyOpened);
              this.props.deleteCurrentlyOpened();
              this.props.incrementTries();
              this.props.triggerGameField(true);
            }, 1000);
          } else if ((R.length(currentlyOpened)) === gameParams.chosenSameCardQuantity) {
            this.props.deleteCurrentlyOpened();
            this.props.incrementTries();
          }
        }
      }
    }
  

    leftOpenedCards = R.filter(R.propEq('opened',false), cards);

    if (gameParams.chosenSameCardQuantity === R.length(leftOpenedCards)) {
      if (R.length(R.uniq(R.pluck('imageId',leftOpenedCards))) === 1) {
        this.props.triggerGameField(false);
        setTimeout(() => {
          leftOpenedCards.forEach((el) => {
            this.props.changeCardStatus(el.id, true);
          });
          this.props.triggerGameField(true);
        }, 1000);
        this.props.gameOver(true);
      }
    }
  }

  render() {
    const cardSize = this.props.gameFieldSize.height / this.props.gameParams.fieldSize;
    const imageId = this.props.cards[this.props.cardNumber].imageId;
    const imageBg = imagePath(imageId);
    let cardOpened = 'card flipped';
    let cardClosed = 'card';
    if (!this.props.gameParams.firstCardClicked) {
      cardOpened = cardOpened.concat(' instantclosing');
      cardClosed = cardClosed.concat(' instantclosing');
    }
    const cardFlipped = this.props.cards[this.props.cardNumber].opened ? cardOpened : cardClosed;

    return (

      <section className="container" style={{ height: `${cardSize}px`, width: `${cardSize}px` }}>
        <div className={cardFlipped} onClick={this.onCardClick.bind(this)}>
          <figure className="front" />
          <figure className="back" style={{ backgroundImage: `url(${imageBg})` }} />
        </div>
      </section>

    );
  }

}
Card.propTypes = {
  cardNumber: React.PropTypes.number,
  cards: React.PropTypes.array,
  gameParams: React.PropTypes.object,
  currentlyOpened: React.PropTypes.array,
  gameFieldSize: React.PropTypes.object,
  triggerGameField: React.PropTypes.func,
  changeCardStatus: React.PropTypes.func,
  deleteCurrentlyOpened: React.PropTypes.func,
  incrementTries: React.PropTypes.func,
  gameOver: React.PropTypes.func,
  addToCurrentlyOpened: React.PropTypes.func,
  firstCardClicked: React.PropTypes.func,
};
