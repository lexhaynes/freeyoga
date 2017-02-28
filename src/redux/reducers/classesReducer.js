import { EDIT_CLASS, ADD_CLASS} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case EDIT_CLASS:
			console.log("reducer: editClass");
			return [...state];

		case ADD_CLASS:
			console.log("reducer: addClass");
			return [...state];
		default:
			return state;
	}
};