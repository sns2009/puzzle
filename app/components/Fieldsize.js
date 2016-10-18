import React from 'react';


export default class Fieldsize extends React.Component{


	constructor(props){
    super(props);
  	}

  	onChange(e){
		const dimention = e.target.value;
		const totalCards = dimention * dimention;
		const sameCards = [];
		this.props.setPrevFieldSize(dimention);
		
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
	}

  	render(){
  		let options = [];
  		for(let i = 2; i <= 10; i++){
  			options.push((<option key={i} value={i}>{i}x{i}</option>));
  		}
  		return (<div>
  			<h4>Choose game field size:</h4>

				<select style={{margin: '0 auto',width:'100px'}} size="9" onChange={this.onChange.bind(this)} >
				    {options}
				</select>
  			</div>)
  	}

}