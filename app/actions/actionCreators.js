export function changeCardsStatus(cardsToChange, status) {
  return {
    type: 'CHANGE_CARD_STATUS',
    cardsToChange,
    status
  };
}
export function setPrevFieldSize(prevFieldSize) {
  return {
    type: 'SET_PREV_FIELD_SIZE',
    prevFieldSize
  };
}
export function setFieldSize(fieldSize) {
  return {
    type: 'SET_FIELD_SIZE',
    fieldSize
  };
}
export function setSameCards() {
  return {
    type: 'SET_SAME_CARDS',
  };
}
export function sameCardChose(chosenSameCardQuantity) {
  return {
    type: 'SAME_CARD_CHOSE',
    chosenSameCardQuantity
  };
}
export function startGame(gameStarted) {
  return {
    type: 'START_GAME',
    gameStarted
  };
}
export function gameOver(gameOver) {
  return {
    type: 'GAME_OVER',
    gameOver
  };
}
export function generateGame() {
  return {
    type: 'GENERATE_GAME'
  };
}
export function triggerGameField(status) {
  return {
    type: 'TRIGGER_GAMEFIELD',
    status
  };
}

export function addToCurrentlyOpened(cardId) {
  return {
    type: 'ADD_TO_CURRENTLY_OPENED',
    cardId
  };
}
export function deleteCurrentlyOpened() {
  return {
    type: 'DELETE_CURRENTLY_OPENED',
  };
}
export function setPerfectTriesNumber(perfectTriesNumber) {
  return {
    type: 'SET_PERFECT_TRIES_NUMBER',
    perfectTriesNumber,
  };
}
export function incrementTries() {
  return {
    type: 'INCREMENT_TRIES',
  };
}
export function resetTries() {
  return {
    type: 'RESET_TRIES',
  };
}
export function firstCardClicked(cardClicked) {
  return {
    type: 'FIRST_CARD_CLICKED',
    cardClicked,
  };
}
