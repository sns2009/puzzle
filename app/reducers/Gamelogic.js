import R from 'ramda';
import { shuffle } from '../utils';

export default function reducer(state = {
  cards: [],
  currentlyOpened: [],
  gameParams: {
    gameStarted: false,
    gameOver: false,
    prevFieldSize: null,
    fieldSize: null,
    sameCards: [],
    chosenSameCardQuantity: null,
    fieldUnblocked: true,
    firstCardClicked: false
  },

  gameResult: {
    perfectGame: null,
    userGame: 0,
  },
}, action) {
  switch (action.type) {
    case 'SET_PREV_FIELD_SIZE': {
      let { gameParams } = state;
      gameParams.prevFieldSize = action.prevFieldSize;
      return R.merge(state,{gameParams}); }

    case 'SET_FIELD_SIZE': {
      let { gameParams } = state;
      gameParams.fieldSize = action.fieldSize;
      return R.merge(state,{gameParams}); }

    case 'SET_SAME_CARDS': {
      let { gameParams } = state;
      const dimention = gameParams.prevFieldSize;
      const totalCards = dimention * dimention;
      let sameCards = [];
      const sameCardsFiltred = R.filter((i) => totalCards % i === 0);
      if (dimention % 2 === 0) {
        sameCards = sameCardsFiltred(R.range(2, (totalCards / 2) + 1));
      } else {
        sameCards = sameCardsFiltred(R.range(3, totalCards));
      }

      gameParams.sameCards = sameCards;
      gameParams.chosenSameCardQuantity = sameCards[0];
      return R.merge(state, {gameParams}); }

    case 'SAME_CARD_CHOSE': {
      let { gameParams } = state;
      gameParams.chosenSameCardQuantity = action.chosenSameCardQuantity;
      return R.merge(state, {gameParams}); }

    case 'START_GAME': {
      let { gameParams } = state;
      gameParams.gameStarted = action.gameStarted;
      return R.merge(state, {gameParams}); }

    case 'GENERATE_GAME': {
      const fieldSize = state.gameParams.fieldSize;
      const chosenSameCardQuantity = state.gameParams.chosenSameCardQuantity;
      const cardsQuantity = fieldSize * fieldSize;
      const imagesQuantity = cardsQuantity / chosenSameCardQuantity;
      let allImagesValues = [];
      let randomizedImages = [];
      let cards = [];
      const mapIndexed = R.addIndex(R.map);

      allImagesValues = R.flatten(
        R.repeat(R.range(0, imagesQuantity), chosenSameCardQuantity)
        )

      randomizedImages = shuffle(allImagesValues);

      cards = mapIndexed((item,i) => {
        return {
          id: i,
          opened: false,
          imageId: item
        };
      }, randomizedImages);

      return R.merge(state, {cards}) 
       }

    case 'CHANGE_CARD_STATUS':{
      let {cards} = state;
      const cardsToOpen = action.cardsToChange;
      R.forEach( cardId => {
        cards[cardId].opened = action.status
      },cardsToOpen);
      return R.merge(state, {cards}) 
       }

    case 'GAME_OVER': {
      let { gameParams } = state;
      gameParams.gameOver = action.gameOver;
      return R.merge(state, {gameParams}); }

    case 'TRIGGER_GAMEFIELD': {
      let { gameParams } = state;
      gameParams.fieldUnblocked = action.status;
      return R.merge(state, {gameParams}); }

    case 'ADD_TO_CURRENTLY_OPENED': { 
      const {currentlyOpened} = state; 
      currentlyOpened.push(action.cardId); 
      return R.merge(state, {currentlyOpened}) }

    case 'DELETE_CURRENTLY_OPENED': {
      let {currentlyOpened} = state;
      currentlyOpened = [];
      return R.merge(state, {currentlyOpened}) }

    case 'SET_PERFECT_TRIES_NUMBER': {
      let { gameResult } = state;
      gameResult.perfectGame = action.perfectTriesNumber - 1;
      return R.merge(state, {gameResult}); }

    case 'INCREMENT_TRIES': {
      let { gameResult } = state;
      gameResult.userGame+=1;
      return R.merge(state, {gameResult}); }

    case 'RESET_TRIES': {
      let { gameResult } = state;
      gameResult.userGame = 0;
      return R.merge(state, {gameResult}); }

    case 'FIRST_CARD_CLICKED': {
      let { gameParams } = state;
      gameParams.firstCardClicked = action.cardClicked;
      return R.merge(state, {gameParams}); }
  }
  return state;
}
