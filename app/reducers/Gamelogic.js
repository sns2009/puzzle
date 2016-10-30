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
    chosenSameCard: null,
    fieldBlocked: true,
    firstCardCliked: false,
  },

  gameResult: {
    perfectGame: null,
    userGame: 0,
  },
}, action) {
  switch (action.type) {
    case 'SET_PREV_FIELD_SIZE':
      let newState = state;
      newState.gameParams.prevFieldSize = action.prevFieldSize;
      return R.merge(state, newState);

    case 'SET_FIELD_SIZE':
      newState = state;
      newState.gameParams.fieldSize = action.fieldSize;
      return R.merge(state, newState);

    case 'SET_SAME_CARDS':
      newState = state;
      const dimention = newState.gameParams.prevFieldSize;
      const totalCards = dimention * dimention;
      let sameCards = [];
      if (dimention % 2 === 0) {
        const sameCardsFiltred = R.filter((i) => {
          if (totalCards % i === 0) return i;
        });
        sameCards = sameCardsFiltred(R.range(2, (totalCards / 2) + 1));
      } else {
        const sameCardsFiltred = R.filter((i) => {
          if (totalCards % i === 0) return i;
        });
        sameCards = sameCardsFiltred(R.range(3, totalCards));
      }

      newState.gameParams.sameCards = sameCards;
      newState.gameParams.chosenSameCard = sameCards[0];
      return R.merge(state, newState);

    case 'SAME_CARD_CHOSE':
      newState = state;
      newState.gameParams.chosenSameCard = action.chosenSameCard;
      return R.merge(state, newState);

    case 'START_GAME':
      newState = state;
      newState.gameParams.gameStarted = action.gameStarted;
      return R.merge(state, newState);

    case 'GENERATE_GAME':
      const fieldSize = state.gameParams.fieldSize;
      const chosenSameCard = state.gameParams.chosenSameCard;
      const cardsQuantity = fieldSize * fieldSize;
      const imagesQuantity = cardsQuantity / chosenSameCard;
      let allCardsValues = [];
      let randomizedCards = [];
      let cards = [];


      allCardsValues = R.flatten(
        R.map((image) => {
          return R.repeat(image, chosenSameCard);
        }, R.range(0, imagesQuantity))
      );

      randomizedCards = shuffle(allCardsValues);

      cards = R.map((item) => {
        return {
          opened: false,
          imageId: item,
        };
      }, randomizedCards);

      newState = state;
      newState.cards = cards;
      return R.merge(state, newState);

    case 'CHANGE_CARD_STATUS':
      const withOpened = state.cards;
      withOpened[action.cardToChange].opened = action.status;
      return R.merge(state, {
        cards: withOpened,
      });

    case 'GAME_OVER':
      newState = state;
      newState.gameParams.gameOver = action.gameOver;
      return R.merge(state, newState);

    case 'TRIGGER_GAMEFIELD':
      newState = state;
      newState.gameParams.fieldBlocked = action.status;
      return R.merge(state, newState);

    case 'ADD_TO_CURRENTLY_OPENED':
      newState = state;
      newState.currentlyOpened.push(action.cardId);
      return R.merge(state, newState);

    case 'DELETE_CURRENTLY_OPENED':
      newState = state;
      newState.currentlyOpened = [];
      return R.merge(state, newState);

    case 'SET_PERFECT_TRIES_NUMBER':
      newState = state;
      newState.gameResult.perfectGame = action.perfectTriesNumber - 1;
      return R.merge(state, newState);

    case 'INCREMENT_TRIES':
      newState = state;
      newState.gameResult.userGame++;
      return R.merge(state, newState);

    case 'RESET_TRIES':
      newState = state;
      newState.gameResult.userGame = 0;
      return R.merge(state, newState);

    case 'FIRST_CARD_CLICKED':
      newState = state;
      newState.gameParams.firstCardClicked = action.cardClicked;
      return R.merge(state, newState);
  }
  return state;
}
