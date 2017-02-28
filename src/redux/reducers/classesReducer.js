import { ADD_CLASS, EDIT_CLASS, REMOVE_CLASS} from '../actions/types';
/*eventually replace this with an ajax call to retrieve data */
import initialState from '../../data.js'

export default function(state = initialState, action) {
	switch(action.type) {
		case ADD_CLASS:
			console.log("reducer: addClass");
			return [...state];

		case EDIT_CLASS:
			console.log("reducer: editClass");
			return [...state];		

		case REMOVE_CLASS:
			console.log("reducer: removeClass");
			return [...state];

		default:
			return state;
	}
};