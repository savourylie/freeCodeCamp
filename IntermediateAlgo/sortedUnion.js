function isNotInArray(arr) {
	return function(value) {
		var inArr = false;

		for (var i = 0; i < arr.length; i++) {
			if (value === arr[i]) {
				inArr = true;
				return !inArr;
			}
		}

		return !inArr;
	}
}

function uniteUnique(arr) {
	var result_arr = arguments[0];

	for (var i = 0; i < arguments.length - 1; i++) {
		result_arr = result_arr.concat(arguments[i + 1].filter(isNotInArray(result_arr)));
	}

	return result_arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// console.log(isNotInArray([1, 4, 2, 5, 8])(5) === false);
// console.log(isNotInArray([1, 4, 2, 8])(5) === true);
