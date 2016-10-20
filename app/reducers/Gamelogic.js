import R from 'ramda'; 




export default function reducer(state={
        cards:null,
        currentlyOpened: [],
        gameParams : {  gameStarted: false,
                        gameOver: false,
                        prevFieldSize: null,
                        fieldSize: null,
                        sameCards: null,
                        chosenSameCard: null,
                        flippedCards: null,
                        fieldBlocked : true},

        gameResult: {   perfectGame: null,
                        userGame: 0}
                                        },action){
    switch(action.type){
        case 'SET_PREV_FIELD_SIZE':
            let newState = state;
            newState.gameParams.chosenSameCard = null;
            newState.gameParams.prevFieldSize = action.prevFieldSize;
            return R.merge(state,newState); 

        case 'SET_FIELD_SIZE':
            newState = state;
            newState.gameParams.fieldSize = action.fieldSize;
            return R.merge(state,newState);

        case 'SET_SAME_CARDS':
            newState = state;
            let dimention = newState.gameParams.prevFieldSize;
            const totalCards = dimention * dimention;
            let sameCards = [];
            if(dimention % 2 === 0){
            for(let i=2; i<=(totalCards / 2); i+=2){
                if(totalCards % i === 0) sameCards.push(i); 
            } 
            }else{
                for(let i=3; i<=(totalCards / 3); i+=1){
                    if(totalCards % i === 0) sameCards.push(i);
                }
            }
            newState.gameParams.sameCards = sameCards;
            return R.merge(state,newState);

        case 'SAME_CARD_CHOSE':
            newState = state;
            newState.gameParams.chosenSameCard = action.chosenSameCard;
            return R.merge(state,newState);

        case 'START_GAME':
            newState = state;
            newState.gameParams.gameStarted = action.gameStarted;
            return R.merge(state,newState);

        case 'GENERATE_GAME':
            const fieldSize = state.gameParams.fieldSize;
            const chosenSameCard = state.gameParams.chosenSameCard;
            const cardsQuantity = fieldSize * fieldSize;
            const imagesQuantity = cardsQuantity / chosenSameCard;
            let allCardsValues = [];
            let randomCardToPick;
            let randomizedCards = [];
            let cards = {};

            
            
            function getRandomInt(min, max) {
              return Math.floor(Math.random() * (max - min)) + min;
            }

            for (let i = 0; i < imagesQuantity; i++ ){
                for(let j = 0; j < chosenSameCard; j++){
                    allCardsValues.push(i);
                }
            }
            
            for(let i = 0; i < cardsQuantity; i++){
                    randomCardToPick = getRandomInt(0, R.length(allCardsValues));
                    randomizedCards[i] = allCardsValues[randomCardToPick];
                    allCardsValues.splice(randomCardToPick,1);

            }


            cards = randomizedCards.map((item,i)=>{
                return {
                    opened: false, 
                    imageId: item}
            });
            
            newState = state;
            newState.cards = cards;
            return R.merge(state,newState);

        case 'CHANGE_CARD_STATUS':
            const withOpened = state.cards;
            withOpened[action.cardToChange].opened = action.status;
            return R.merge(state,{cards: withOpened });

        case 'GAME_OVER':
            newState = state;
            newState.gameParams.gameOver = action.gameOver;
            return R.merge(state, newState);

        case 'TRIGGER_GAMEFIELD':
            newState = state;
            newState.gameParams.fieldBlocked = action.status;
            return R.merge(state,newState);

        case 'ADD_TO_CURRENTLY_OPENED':
            newState = state;
            newState.currentlyOpened.push(action.cardId);
            return R.merge(state,newState);

        case 'DELETE_CURRENTLY_OPENED':
            newState = state;
            newState.currentlyOpened = [];
            return R.merge(state,newState);

        case 'SET_PERFECT_TRIES_NUMBER':
            newState = state;
            newState.gameResult.perfectGame = action.perfectTriesNumber - 1;
            return R.merge(state,newState);        

        case 'INCREMENT_TRIES':
            newState = state;
            newState.gameResult.userGame++;
            return R.merge(state,newState);

        case 'RESET_TRIES':
            newState = state;
            newState.gameResult.userGame = 0;
            return R.merge(state,newState);
    }
	return state;
}
