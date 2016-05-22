function reverseString(str) {
	str = str.split('').reverse().join('');
	return str;
}

function palindrome(str) {
 	lower_str = str.toLowerCase();
 	pun_removed = lower_str.replace(/\s/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	return pun_removed == reverseString(str.toLowerCase().replace(/\s/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));
}

palindrome("eye");
