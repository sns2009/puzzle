import React from 'react';
import Card from './Card';



export default class Gamefield extends React.Component{

  createCards(){
    let cards = this.props.store.cards;
    let boxes = cards.map((el,i)=>{
      return ( <Card key={i}  cardNumber={i} {...this.props}  /> )
    });
    return boxes;
        
  }

  

  render(){
    let gameFieldCont = (<div style={{textAlign:'center',lineHeight:this.props.gameFieldSize.height/2+'px'}}><h1>WELCOME</h1>
      <h2>Choose game params &#8594;</h2></div>);
    if (this.props.store.gameParams.gameStarted) gameFieldCont = this.createCards();

    return (<div className="gamefield" style={this.props.gameFieldSize}>
            { 
              gameFieldCont
              }
    </div>)
  }


}
