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
