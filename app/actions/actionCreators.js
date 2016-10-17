export function setPrevious(previousCard){
	return {
		type: "SET_PREVIOUS",
		previousCard
	}
}
export function changeCardStatus(cardToChange,status){
	return {
		type:"CHANGE_CARD_STATUS",
		cardToChange,
		status
	}
}
export function setFieldSize(fieldSize){
	return {
		type:"SET_FIELD_SIZE",
		fieldSize
	}
}
export function setSameCards(sameCards){
	return {
		type:"SET_SAME_CARDS",
		sameCards
	}
}
export function sameCardChose(chosenSameCard){
	return {
		type:"SAME_CARD_CHOSE",
		chosenSameCard
	}
}
export function startGame(gameStarted){
	return {
		type:"START_GAME",
		gameStarted
	}
}
export function generateGame(){
	return {
		type:"GENERATE_GAME"
	}
}
export function triggerGameField(status){
	return {
		type:"TRIGGER_GAMEFIELD",
		status
	}
}

export function addToCurrentlyOpened(cardId){
	return {
		type:"ADD_TO_CURRENTLY_OPENED",
		cardId
	}
}
export function deleteCurrentlyOpened(){
	return {
		type:"DELETE_CURRENTLY_OPENED"
	}
}
