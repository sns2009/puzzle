import React from 'react';
import Card from './Card';



export default class Gamefield extends React.Component{

  createCards(){
    let cards = this.props.store.cards;
    let boxes = cards.map((el,i)=>{
      return ( <Card key={i}  cardNumber={i} {...this.props}  /> )
    });
    // console.log(boxes);    
          // for(var i = 0; i < Object.keys(this.props.store.cards).length; i++){
          //   boxes.push( <Card key={i}  cardNumber={i} {...this.props}  /> );
          // }
    return boxes;
        
  }

  

  render(){
    var gameFieldCont = (<div style={{textAlign:'center',lineHeight:this.props.gameFieldSize.height/2+'px'}}><h2>WELCOME</h2>
      <p>Choose game params &#8594;</p></div>);
    if (this.props.store.gameParams.gameStarted) gameFieldCont = this.createCards();

    return (<div className="gamefield" style={this.props.gameFieldSize}>
            { 
              gameFieldCont
              }
    </div>)
  }


}
