//take all your reducers in this reducers dir and comnbine + export them so store can use.
import { combineReducers } from 'redux';
import sample from './sample';


const rootReducer = combineReducers({
	sample
});

export default rootReducer;
