function steamrollArray(arr) {
	var temp_arr = [];
	var allGood = false;

	while (!allGood) {
		allGood = true;

		for (var i = 0; i < arr.length; i++) {
			// console.log("i = " + i);
			// console.log("arr[i] = " + arr[i]);

			if (!Array.isArray(arr[i])) {
				temp_arr.push(arr[i]);
			}

			else {
				// console.log("array: " + arr[i])
				allGood = false;

				for (var j = 0; j < arr[i].length; j++) {
					// console.log(arr[i][j]);
					temp_arr.push(arr[i][j]);
				}
			}

			// console.log(temp_arr);
		}
		arr = temp_arr;
		temp_arr = [];
	}

	return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamroller([[["a"]], [["b"]]]);