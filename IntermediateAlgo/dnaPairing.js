function pair(str) {
	switch (str) {
		case "A":
			return "T";
		case "T":
			return "A";
		case "C":
			return "G";
		case "G":
			return "C";
	}
}

function pairElement(str) {
	var result_arr = [];

	for (var i = 0; i < str.length; i++) {
		result_arr.push([str[i], pair(str[i])]);
	}

	return result_arr;
}

// console.log(pair("T"));

console.log(pairElement("ATCGA"));