"use strict";
"use esversion: 6";

class RomanDict {
	constructor() {
		this.M = 1000;
		this.D = 500;
		this.C = 100;
		this.L = 50;
		this.X = 10;
		this.V = 5;
		this.I = 1;
	}

}


function stringMultiplier(str, n) {
	var result_str = "";

	for (var i = 0; i < n; i++) {
		result_str = result_str + str;
	}

	return result_str;
}


function numOfSymbol(num, symbol) {
	var roman_dict = new RomanDict();

	// console.log([parseInt(num / roman_dict[symbol]), num % roman_dict[symbol]]);
	return [parseInt(num / roman_dict[symbol]), num % roman_dict[symbol]];
}


function convertToRoman(num) {
	var roman_dict = new RomanDict();
	var result_str = "";
	var temp_num = num;

	for (var property in roman_dict) {
    	if (roman_dict.hasOwnProperty(property)) {
    		result_str = result_str + stringMultiplier(property, numOfSymbol(temp_num, property)[0]);
			temp_num = numOfSymbol(temp_num, property)[1];
    	}
	}

	// ETL for XI and VI etc...
	result_str = result_str.replace("DCCCC", "CM");
	result_str = result_str.replace("CCCC", "CD");
	result_str = result_str.replace("LXXXX", "XC");
	result_str = result_str.replace("XXXX", "XL");
	result_str = result_str.replace("VIIII", "IX");
	result_str = result_str.replace("IIII", "IV");

	// console.log(result_str);
	return result_str;
}

// convertToRoman(36);

console.log(convertToRoman(2)=== "II");
console.log(convertToRoman(3)=== "III");
console.log(convertToRoman(4)=== "IV");
console.log(convertToRoman(5)=== "V");
console.log(convertToRoman(9)=== "IX");
console.log(convertToRoman(12) === "XII");
console.log(convertToRoman(16) === "XVI");
console.log(convertToRoman(29) === "XXIX");
console.log(convertToRoman(44) === "XLIV");
console.log(convertToRoman(45) === "XLV");
console.log(convertToRoman(68) === "LXVIII");
console.log(convertToRoman(83) === "LXXXIII");
console.log(convertToRoman(97) === "XCVII");
console.log(convertToRoman(99) === "XCIX");