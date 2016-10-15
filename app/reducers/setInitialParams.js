import R from 'ramda'; 

function generateInitialState(){


var boxNumber = 16;
var imgArr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg'];
var boxValue = [];
var previousCard = null;
var cardsBg = [];
var cards = {};
var gameParams = {gameStarted: false, fieldSize: null, sameCards: null, chosenSameCard: null, flippedCards: null, fieldBlocked : false};
var gameResult ={perfectGame: null, userGame: null}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




function onlyTwoNotUnique(box){
    var j = 0;
    for(var k = 0; k < boxNumber; k++){
        if(boxValue[box] === boxValue[k]){
            j++;
        }
    }
    if(j>2){
        boxValue[i] = getRandomInt(0,8);
        onlyTwoNotUnique(box);
    }   
}
    
	for(var i = 0; i < boxNumber; i++){
        boxValue[i] = getRandomInt(0,8);
        if( !((i-1) <= 0) ){
            onlyTwoNotUnique(i);   
        }
    }

    boxValue.forEach((item,i)=>{
        cards[i] = {
        opened: false, 
        backgroundImage: 'url('+imgArr[item]+')'
    }

    });
    
	return {
        previousCard: previousCard,
        cards : cards,
        gameParams : gameParams,
        gameResult: gameResult
    }

}
const initialState = generateInitialState();

export default function reducer(state=initialState,action){
    switch(action.type){
        case 'SET_PREVIOUS':
            console.log('previous was set to store');
            return R.merge(state,{previousCard : action.previousCard});
        case 'CHANGE_CARD_STATUS':
            console.log('card status changed in store');
            const withOpened = state.cards;
            withOpened[action.cardToChange].opened = action.status;
            return R.merge(state,{cards: withOpened });
        case 'SET_FIELD_SIZE':
            return R.merge(state,{fieldSize: action.fieldSize}  );    
        case 'SET_SAME_CARDS':
            return R.merge(state,{sameCards: action.sameCards}  );
        case 'SAME_CARD_CHOSE':
            return R.merge(state,{chosenSameCard: action.chosenSameCard}  );   
    }
    
	return state;

}