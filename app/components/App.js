import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Gamefield from './Gamefield';

function mapStateToProps(state){
	return{
		store: state.setInitialParams	
	}
	
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
	
}

const App = connect(mapStateToProps,mapDispatchToProps)(Gamefield);

export default App;