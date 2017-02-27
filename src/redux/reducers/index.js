//take all your reducers in this reducers dir and comnbine + export them so store can use.
import { combineReducers } from 'redux';
import SampleReducer from './sample';


const rootReducer = combineReducers({
	sample: SampleReducer
});

export default rootReducer;
