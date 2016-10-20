import React from 'react';
import Gamefield from './Gamefield'
import Result from './Result'
import Fieldsize from './Fieldsize'
import Samecards from './Samecards'
import Startbutton from './Startbutton'

export default class Welcome extends React.Component{


	constructor(props){
    super(props);
  	}

	
	render(){
		let startBlockWidth = this.props.windowWidth - this.props.gameFieldSize.width;

		return(
			<div className ="app clearfix">
				<Gamefield {...this.props}  />
				<div style={{float:'right',width: startBlockWidth - 20 +'px',height: 'auto'}}>
					<div style={{margin: '0 auto',
								width: '200px',
								display:'block',
								textAlign:'center'}}>

								<Result {...this.props} />

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
	gameFieldSize : {width:document.documentElement.clientHeight - 2,
							height:document.documentElement.clientHeight - 2},
	windowWidth: document.documentElement.clientWidth
}
