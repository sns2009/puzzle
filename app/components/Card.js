import React from 'react';
import R from 'ramda';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';
import imagePath from '../imagesPath';
import gameConfig from '../gameConfig';


class Card extends React.Component {

  constructor(props) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
  }
  onCardClick(e) {
    const gameParams = this.props.gameParams;
    const cards = this.props.cards;
    const currentlyOpened = this.props.currentlyOpened;
    let leftOpenedCards = [];

    e.preventDefault();
    this.props.firstCardClicked(true);
    if (gameParams.fieldUnblocked && !cards[this.props.cardNumber].opened) {
      // Open card
      this.props.changeCardsStatus([this.props.cardNumber], true);
      // Add card to currently opened cards
      if (currentlyOpened[R.length(currentlyOpened) - 1] !== this.props.cardNumber) {
        this.props.addToCurrentlyOpened(this.props.cardNumber);


      // If in curently opened cards all cards have same bg ond their quantity less than sameCardChosen
      // - don't close

      // If in curently opened cards all cards have same bg and their quantity equals sameCardChosen
      // - don't clase, but erase curently opened array

      // If in currently opened cards some bg differs from other(s)
      // - block gamefield and CLOSE cards, after unblock gamefield

      
        if (cards[R.head(currentlyOpened)].imageId !==
            cards[R.last(currentlyOpened)].imageId) {
          this.props.triggerGameField(false);
          setTimeout(() => {
            this.props.changeCardsStatus(currentlyOpened, false);
            this.props.deleteCurrentlyOpened();
            this.props.incrementTries();
            this.props.triggerGameField(true);
          }, gameConfig.cardFlippingSpeed);
        } else if ((R.length(currentlyOpened)) === gameParams.chosenSameCardQuantity) {
          this.props.deleteCurrentlyOpened();
          this.props.incrementTries();
        }
      }
    }


    leftOpenedCards = R.filter(R.propEq('opened', false), cards);

    if (gameParams.chosenSameCardQuantity === R.length(leftOpenedCards) &&
     R.length(R.uniq(R.pluck('imageId', leftOpenedCards))) === 1) {
      this.props.triggerGameField(false);
      setTimeout(() => {
        this.props.changeCardsStatus(R.pluck('id', leftOpenedCards), true);
        this.props.triggerGameField(true);
      }, gameConfig.cardFlippingSpeed);
      this.props.gameOver(true);
    }
  }

  render() {
    const cardSize = this.props.gameFieldSize.height / this.props.gameParams.fieldSize;
    const imageId = this.props.cards[this.props.cardNumber].imageId;
    const imageBg = imagePath(imageId);
    const cardOpened = 'cardFlipped';
    let cardClosed = 'card';
    if (!this.props.gameParams.firstCardClicked) cardOpened, cardClosed = 'instantCardClosing';
    const cardStyling = this.props.cards[this.props.cardNumber].opened ? cardOpened : cardClosed;

    return (

      <section  styleName="container" 
                style={{ height: `${cardSize}px`, width: `${cardSize}px` }}>
        <div  styleName={cardStyling} 
              onClick={this.onCardClick}>
          <figure styleName="front" />
          <figure 
                  styleName="back" 
                  style={{ backgroundImage: `url(${imageBg})` }} />
        </div>
      </section>

    );
  }

}
Card.propTypes = {
  cardNumber: React.PropTypes.number,
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
      fieldUnblocked: React.PropTypes.bool,
      firstCardClicked: React.PropTypes.bool
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
  firstCardClicked: React.PropTypes.func
};
export default CSSModules(Card, styles);
