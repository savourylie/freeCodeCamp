function translatePigLatin(str) {
	var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
	var vowels = ['a', 'e', 'i', 'o', 'u'];

	// Check head
	if (consonants.indexOf(str[0]) >= 0) {
		console.log(str[0]);
		console.log("Inside consonants");

		if (consonants.indexOf(str[1]) >= 0) {
			var temp = str[0] + str[1];
				str = str.replace(str[0] + str[1], "");
				str = str + temp + 'ay';
		}
		else {
			var temp = str[0];
			str = str.replace(str[0], "");
			str = str + temp + 'ay';

		}
	}

	else {
		console.log("Inside vowels");
		str = str + 'way';
	}

	// // Check tail
	// if (consonants.indexOf(str[-1])) {
	// 	str = str + 'ay';
	// }

	return str;
}
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("paragraphs"));
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
