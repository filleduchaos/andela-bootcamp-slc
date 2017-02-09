'use strict'

module.exports = {
	// This function finds the minimum and maximum values in an array of numbers.
	findMinMax: function(numlist) {
		// Return empty array if array is empty.
		if (numlist.length === 0) {
			return [];
		}

		// Return null if array is not an array of numbers.
		if (typeof numlist[0] !== 'number') {
			return null;
		}

		// Sort array in ascending order.
		numlist.sort( function (a,b) {return a - b} );

		// Return [min] if min and max values are equal.
		if (numlist[0] == numlist[numlist.length - 1]) {
			return [numlist[0]];
		}
		// Return [min, max].
		else return [ numlist[0], numlist[numlist.length - 1] ];
	}
}