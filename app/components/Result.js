import React from 'react';


export default class Result extends React.Component{


	constructor(props){
    super(props);
  	}


  	render(){
      let showResult = 'hidden';
      let tries = 'tries';
      let times = 'times';
  		if(this.props.store.gameParams.gameOver === true) showResult = 'visible animated';
      if(this.props.store.gameResult.perfectGame === 1) tries = 'try';
      if(this.props.store.gameResult.userGame === 1) times = 'time';
      
  		return (<div id="result" className={showResult}>
  			<h4>Game Result:</h4>
        <p>Perfect game: {this.props.store.gameResult.perfectGame} {tries}</p>
        <p>You tried: {this.props.store.gameResult.userGame} {times}</p>
        </div>)
  	}

}