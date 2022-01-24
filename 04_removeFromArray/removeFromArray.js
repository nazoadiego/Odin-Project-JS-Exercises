var removeFromArrayAdvanced = function (array, ...args) {
	return array.filter((value) => !args.includes(value));
};

const removeFromArray = (...args) => {
	// the very first item in our list of arguments is the array, we pull it out with args[0]
	const array = args[0];
	// create a new empty array
	const filteredArray = [];
	// use forEach to go through the array
	array.forEach((item) => {
		// push every element into the new array
		// UNLESS it is included in the function arguments
		// so we create a new array with every item, except those that should be removed
		if (!args.includes(item)) {
			filteredArray.push(item);
		}
	});
	// and return that array
	return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
