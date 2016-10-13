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
