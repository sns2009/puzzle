import React from 'react';


export default class Fieldsize extends React.Component{


	constructor(props){
    super(props);
  	}

  	onChange(e){
		const dimention = e.target.value;
		const totalCards = dimention * dimention;
		const sameCards = [];
		if(dimention % 2 === 0){
			for(var i=2; i<=(totalCards / 2); i+=2){
				if(totalCards % i === 0) sameCards.push(i); 
			} 
		}else{
			for(var i=3; i<=(totalCards / 3); i+=1){
				if(totalCards % i === 0) sameCards.push(i);
			}
		}
		this.props.setSameCards(sameCards);
		console.log(this.props);
	}

  	render(){
  		return (<div>
  			<h4>Choose game field size:</h4>

				<select style={{margin: '0 auto',width:'100px'}} size="9" onChange={this.onChange.bind(this)} defaultValue="4">
				    <option value="2">2x2</option>
				    <option value="3">3x3</option>
				    <option value="4">4x4</option>
				    <option value="5">5x5</option>
				    <option value="6">6x6</option>
				    <option value="7">7x7</option>
				    <option value="8">8x8</option>
				    <option value="9">9x9</option>
				    <option value="10">10x10</option>
				</select>
  			</div>)
  	}

}