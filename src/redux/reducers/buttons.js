export default function(state = [], action) {
	switch(action.type) {
		case 'askQuestion':
			console.log("action: buttons action of type askQuestion!");
			return [...state];
		default:
			return state;
	}
};