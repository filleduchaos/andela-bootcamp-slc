'use strict'

module.exports = {
	// This function implements the Fizzbuzz test
	fizzBuzz: function(num) {
		// Return empty string if num is not a number
		if (typeof num !== 'number') {
			return '';
		}

		/* Return FizzBuzz if num is a multiple of 3 and 5
			Return Fizz if num is a multiple of 3 only
			Return Buzz if num is a multiple of 5 only
		*/
		if (num%15 === 0) {
			return 'FizzBuzz';
		} else if (num%3 === 0) {
			return 'Fizz';
		} else if (num%5 === 0) {
			return 'Buzz';
		} else return num;
	}
}