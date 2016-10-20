import React from 'react';


export default class Startbutton extends React.Component{


	constructor(props){
    super(props);
	    this.state = {
	    	lackOfParams : ''
	    }
  	}

  	start(){
  		
  		if((this.props.store.gameParams.sameCards === null) || (this.props.store.gameParams.chosenSameCard === null)){
  			this.setState({lackOfParams :'Choose game settings above'});
  		}else{
  			this.setState({lackOfParams :''});
        this.props.setFieldSize(this.props.store.gameParams.prevFieldSize);
  			this.props.startGame(true);
        this.props.gameOver(false);
        let options = document.getElementById('sameCards').children;
        [].forEach.call(options,(el)=>{el.selected = false;});
        this.props.setPerfectTriesNumber(this.props.store.gameParams.fieldSize * this.props.store.gameParams.fieldSize / this.props.store.gameParams.chosenSameCard);
  			this.props.resetTries();
        this.props.deleteCurrentlyOpened();
        this.props.generateGame();
  		}
  	}

  	render(){
  		
  		return (<div>

  			<button onClick={this.start.bind(this)} style={{marginTop:'20px'}}>
  			Here we go!
  			</button>

  			<div style={{color:'red',marginTop:'15px'}}>{this.state.lackOfParams}</div>

  			</div>)
  	}

}