function isPrime(num) {
	if (num === 1) {
		return false;
	}

	var i = 2;
	while (i <= num / 2) {
		if (num % i === 0) {
			return false;
		}
		i += 1;
	}
	return true;
}

function sumPrimes(num) {
	var result = 0;
	var i = 1;

	while (i <= num) {
		if (isPrime(i)) {
			result += i;
		}
		i += 1;
	}
	return result;
}

sumPrimes(10) === 17
// sumPrimes(997) === 73156
