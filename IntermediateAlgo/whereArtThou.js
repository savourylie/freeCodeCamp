function whereAreYou(collection, source) {
	var result_arr = [];
	var quali = true;

	for (var i = 0; i < collection.length; i++) {
		for (var property in collection[i]) {
			for (var propertyS in source) {
				if (source.hasOwnProperty(propertyS)) {
					if (!collection[i].hasOwnProperty(propertyS) || collection[i][propertyS] !== source[propertyS]) {
						quali = false;
					}
				}
			}
		}

		if (quali === true) {
			result_arr.push(collection[i]);
		}

		quali = true;
	}

	console.log(result_arr);
	return result_arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
