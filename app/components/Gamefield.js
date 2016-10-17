import React from 'react';
import Card from './Card';



export default class Gamefield extends React.Component{

  createCards(){
    var boxes = [];
    var cardSize = this.props.gameFieldSize / 4;
        if(this.props.store.cards != undefined){
          for(var i = 0; i < Object.keys(this.props.store.cards).length; i++){
            boxes.push( <Card key={i}  cardNumber={i} {...this.props}  /> );
          }
          return boxes;
        }
  }

  

  render(){
    var gameFieldCont = (<div>WELCOME</div>);
    if (this.props.store.gameParams.gameStarted) gameFieldCont = this.createCards();

    return (<div className="gamefield" style={this.props.gameFieldSize}>
            { 
              gameFieldCont
              }
    </div>)
  }


}
