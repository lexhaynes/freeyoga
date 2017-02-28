import { ADD_CLASS, EDIT_CLASS, REMOVE_CLASS} from '../actions/types';

export function addClass() {
	console.log("action: add class ");
	return {
		type: ADD_CLASS
	}
}

export function editClass() {
	console.log("action: edit class ");
	return {
		type: EDIT_CLASS
	}
}

export function removeClass() {
	console.log("action: remove class ");
	return {
		type: REMOVE_CLASS
	}
}