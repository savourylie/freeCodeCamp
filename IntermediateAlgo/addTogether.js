function addTogether() {
	var arg = Array.prototype.slice.call(arguments);

	if (arg.length === 2) {
		if (!Number.isInteger(arg[0]) || !Number.isInteger(arg[1])) {
			return undefined;
		}

		return arg[0] + arg[1];
	}

	else if (arg.length === 1) {
		if (!Number.isInteger(arg[0])) {
			return undefined;
		}

		return (function(second) {
			if (!Number.isInteger(second)) {
				return undefined;
			}

			return arg[0] + second;
		});
	}
}

console.log(addTogether(3)(2));
console.log(addTogether("http://bit.ly/IqT6zt"));
