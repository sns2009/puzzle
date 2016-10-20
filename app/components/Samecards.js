import React from 'react';


export default class Samecards extends React.Component{


	constructor(props){
    super(props);
  	}

  	onChange(e){
		this.props.sameCardChose(e.target.value);
		
	}

  	render(){
  		let sameCards = [];
  		if(this.props.store.gameParams.sameCards != null){
  		sameCards = this.props.store.gameParams.sameCards.map((card,i,array)=>{
  			return (<option onClick={this.onChange.bind(this)} key={i}  value={card}>{card}</option>)
  		})}else{

      }
  		return (<div>
  			<h4>Choose quantity of same tiles to find:</h4>

				<select style={{margin: '0 auto',width:'100px'}} id="sameCards" size="3"  >
				{sameCards}
				</select>
  			</div>)
  	}

}