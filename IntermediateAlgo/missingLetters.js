function fearNotLetter(str) {
	var continuous = true;

	for (var i = 0; i < str.length; i++) {
		if (i > 0) {
			continuous = (str.charCodeAt(i) - 1 === prev_letter);
		}

		if (!continuous) {
			return String.fromCharCode(str.charCodeAt(i) - 1);
		}

		prev_letter = str.charCodeAt(i);
	}

}


console.log(fearNotLetter("abce"));
