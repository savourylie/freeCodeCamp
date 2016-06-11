// function divisors(num) {
// 	var div_arr = [];

// 	var i = 1;
// 	while (i <= num) {
// 		if (num % i === 0) {
// 			div_arr.push(i);
// 		}
// 		i += 1;
// 	}

// 	return div_arr;
// }

// function gcd(num1, num2) {
// 	div_num1_arr = divisors(num1);
// 	div_num2_arr = divisors(num2);

// 	var cdiv_arr = [];

// 	for (i = 0; i < div_num1_arr.length; i++) {
// 		if (div_num2_arr.indexOf(div_num1_arr[i]) >= 0) {
// 			cdiv_arr.push(div_num1_arr[i]);
// 		}
// 	}

// 	// console.log(cdiv_arr);

// 	return Math.max.apply(null, cdiv_arr);
// }
function occurence(ele, arr) {
	var count = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === ele) {
			count += 1;
		}
	}

	return count;
}

function smallestCommons(num_arr) {
	num_arr = num_arr.sort();

	var original_divisors = [];

	for (var i = 0; i + num_arr[0] <= num_arr[1]; i++) {
		original_divisors.push(i + num_arr[0]);
	}

	var divisors = original_divisors.slice();
	var div_len = divisors.length;

	while (occurence(divisors[0], divisors) !== div_len) {
		min = Math.min.apply(null, divisors);
		min_id = divisors.indexOf(min);

		divisors[min_id] = divisors[min_id] + original_divisors[min_id];

		// console.log(divisors)
	}

	return divisors[0];
}
