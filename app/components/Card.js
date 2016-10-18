import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import imagePath from '../imagesPath'


export default class Card extends React.Component{

  constructor(){
    super();
  }     


  onCardClick(e){
    let leftOpenedCards = [];
    e.preventDefault();
    console.log('at the beginning on click event previousCard = ', this.props.store.previousCard);
    console.log('at the beginning on click event currentCard = ', this.props.cardNumber);
    if(this.props.store.gameParams.fieldBlocked ){
      if(!this.props.store.cards[this.props.cardNumber].opened){
      // Open card
      this.props.changeCardStatus(this.props.cardNumber, true);
      // Add card to currently opened cards
        if(this.props.store.currentlyOpened[this.props.store.currentlyOpened.length - 1] != this.props.cardNumber){
        this.props.addToCurrentlyOpened(this.props.cardNumber);


      // If in curently opened cards all cards have same bg ond their quantity less than sameCardChosen 
      //- don't close
      
      // If in curently opened cards all cards have same bg and their quantity equals sameCardChosen 
      //- don't clase, but erase curently opened array

      // If in currently opened cards some bg differs from other(s) 
      //- block gamefield and CLOSE cards, after anblack gamefield

          
          if (this.props.store.cards[this.props.store.currentlyOpened[0]].imageId != 
            this.props.store.cards[this.props.store.currentlyOpened[this.props.store.currentlyOpened.length - 1]].imageId){
            this.props.triggerGameField(false);
            setTimeout(()=>{
            this.props.store.currentlyOpened.forEach((el,i)=>{
              this.props.changeCardStatus(el,false);
            })
            this.props.deleteCurrentlyOpened();
            this.props.triggerGameField(true);
              
            },1000);
            
          }else {
            if( (R.length(this.props.store.currentlyOpened)) == this.props.store.gameParams.chosenSameCard){
              this.props.deleteCurrentlyOpened();
            }
          }
          
          
        

        }
      }
    }
    // this.props.store.cards.forEach((el,i,array)=>{
    //         if(el['opened'] === false) leftOpenedCards.push(array[i]);
    //       });
          var cards = this.props.store.cards;
          console.log(typeof(cards))
          for(var index in cards) { 
            console.log(index);
             if (cards.hasOwnProperty(index)) {
                 let card = cards[index];

                if(card['opened'] === false) {
                  card.id = index;
                  leftOpenedCards.push(card);
                }
              }
             }
          
          console.log(leftOpenedCards);
          if (this.props.store.gameParams.chosenSameCard == R.length(leftOpenedCards)){
            if (leftOpenedCards['0'].imageId ===  leftOpenedCards[''+R.length(leftOpenedCards) - 1].imageId){
          
            this.props.triggerGameField(false);
            setTimeout(()=>{
            leftOpenedCards.forEach((el,i,array)=>{
              this.props.changeCardStatus(el.id,true);
            })
            
            this.props.triggerGameField(true);
              
            },1000);

            }
          }
  }

  render(){


    // const imageBg = this.props.store.cards[this.props.cardNumber].opened ? this.props.store.cards[this.props.cardNumber].backgroundImage : '';

    const cardSize = this.props.gameFieldSize.height / this.props.store.gameParams.fieldSize;
    const imageId = this.props.store.cards[this.props.cardNumber].imageId;
    const imageBg = imagePath(imageId);

    const cardFlipped = this.props.store.cards[this.props.cardNumber].opened ? 'card flipped' : 'card';
    
    return(

      <section className="container" style={{height:cardSize +'px',width:cardSize+'px'}}>
        <div className={cardFlipped} onClick={this.onCardClick.bind(this)}>
          <figure className="front"></figure>
          <figure className="back" style={{backgroundImage:'url('+imageBg+')'}}></figure>
        </div>
      </section>
      
    )
  }

} 