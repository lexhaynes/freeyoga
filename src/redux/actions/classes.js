import { ADD_CLASS, EDIT_CLASS } from './types';

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