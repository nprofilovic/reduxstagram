import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

 (mapStateToProps) => {(state)
		 state.posts,
		 state.comments	
	}

(mapDispachToProps) => {(dispatch) 
	bindActionCreators(actionCreators, dispatch);}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;