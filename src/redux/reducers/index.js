//take all your reducers in this reducers dir and comnbine + export them so store can use.
import { combineReducers } from 'redux';
import ClassesReducer from './classesReducer';


const rootReducer = combineReducers({
	classData: ClassesReducer,
});

export default rootReducer;
