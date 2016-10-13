import React from 'react';
import Card from './Card';



export default class Gamefield extends React.Component{

  createCards(){
    var boxes = [];
        for(var i = 0; i < Object.keys(this.props.store.cards).length; i++){
          boxes.push( <Card key={i} cardNumber={i} {...this.props}  /> );
        }
        return boxes;
  }

  componentDidMount(){

  	
    
  }

  render(){
    return (<div>
            { this.createCards()
              }
    </div>)
  }


}
