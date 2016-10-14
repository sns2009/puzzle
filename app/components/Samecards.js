import React from 'react';


export default class Samecards extends React.Component{


	constructor(props){
    super(props);
  	}

  	onChange(e){
		const dimention = e.target.value;
		
	}

  	render(){
  		var sameCards = this.props.store.gameParams.sameCards.map((card)=>{
  			return (<option value={card}>{card}</option>)
  		})
  		return (<div>
  			<h4>Choose quantity of same tiles to find:</h4>

				<select style={{margin: '0 auto',width:'100px'}} size="9" onChange={this.onChange.bind(this)} defaultValue="4">
				sameCards
				</select>
  			</div>)
  	}

}