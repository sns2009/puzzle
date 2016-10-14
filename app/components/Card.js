import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';


export default class Card extends React.Component{

  constructor(){
    super();
  }     


  onCardClick(e){
  e.preventDefault();
  
  console.log('at the beginning on click event previousCard = ', this.props.store.previousCard);
  console.log('at the beginning on click event currentCard = ', this.props.cardNumber);
  this.props.changeCardStatus(this.props.cardNumber, true);

  if( this.props.store.previousCard != null  && 
    (this.props.store.cards[this.props.cardNumber].backgroundImage != this.props.store.cards[this.props.store.previousCard].backgroundImage) ){

    if(this.props.store.previousCard != this.props.cardNumber){
    setTimeout(()=>{
    this.props.changeCardStatus(this.props.store.previousCard, false);
    this.props.changeCardStatus(this.props.cardNumber, false);
    this.props.setPrevious(null);
  },1000);}

  }

  


  if(this.props.store.previousCard == null) {
  this.props.setPrevious(this.props.cardNumber);
  }

  if( (this.props.store.previousCard != null) &&
      (this.props.store.cards[this.props.cardNumber].backgroundImage == this.props.store.cards[this.props.store.previousCard].backgroundImage) ){
    this.props.setPrevious(null);
  }
  // if(this.props.store.previousCard != null){ 
  // if(this.props.store.cards[this.props.cardNumber].backgroundImage === this.props.store.cards[this.props.store.previousCard].backgroundImage){
  //   setTimeout(()=>{
  //   this.props.changeCardStatus(this.props.store.previousCard, false);
  //   this.props.changeCardStatus(this.props.cardNumber, false);
  //   this.props.setPrevious(this.props.cardNumber);
  //   },2000);
    
  // }
// }  
    
 
  


  
  




  
 }

  render(){
    console.log('rerendered');

    // const imageBg = this.props.store.cards[this.props.cardNumber].opened ? this.props.store.cards[this.props.cardNumber].backgroundImage : '';

    const cardSize = this.props.gameFieldSize.height / 4;
    const imageBg = this.props.store.cards[this.props.cardNumber].backgroundImage;
    const cardFlipped = this.props.store.cards[this.props.cardNumber].opened ? 'card flipped' : 'card';
    console.log(this.props.fieldSizes);
    return(

      <section className="container" style={{height:cardSize +'px',width:cardSize+'px'}}>
        <div className={cardFlipped} onClick={this.onCardClick.bind(this)}>
          <figure className="front"></figure>
          <figure className="back" style={{backgroundImage:imageBg}}></figure>
        </div>
      </section>
      
    )
  }

} 