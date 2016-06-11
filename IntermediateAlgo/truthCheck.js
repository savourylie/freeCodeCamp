function truthCheck(collection, pre) {
	var allGood = true;

	// Is everyone being true?
	for (var i = 0; i < collection.length; i++) {
		console.log(Boolean(collection[i][pre]));

		if (Boolean(!collection[i][pre])) {
			allGood = false;
		}
	}
	console.log(allGood);

	return allGood;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");