export const sampleAction = (item) => {
	console.log("sample action: ", item);
	return {
		type: 'add',
		item
	};
};