import React from 'react';
import Gamefield from './Gamefield'
import Fieldsize from './Fieldsize'
import Samecards from './Samecards'
import Startbutton from './Startbutton'

export default class Welcome extends React.Component{


	constructor(props){
    super(props);
  	}

	
	render(){
		var startBlockWidth = this.props.windowWidth - this.props.gameFieldSize.width;

		return(
			<div className ="app clearfix">
				<Gamefield {...this.props}  />
				<div style={{float:'right',width: startBlockWidth - 20 +'px',height: 'auto'}}>
					<div style={{margin: '0 auto',
								width: '200px',
								height:'200px',
								display:'block'}}>

								<Fieldsize {...this.props} />

								<Samecards {...this.props} />

								<Startbutton {...this.props} />

							
					</div>
				</div>
			</div>
			)
			}
		}
Welcome.defaultProps = {
	gameFieldSize : {width:document.documentElement.clientHeight,
							height:document.documentElement.clientHeight},
	windowWidth: document.documentElement.clientWidth
}
