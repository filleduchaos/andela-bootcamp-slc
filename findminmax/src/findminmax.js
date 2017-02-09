'use strict'

module.exports = {
	// This function finds the minimum and maximum values in an array of numbers.
	findMinMax: function(numlist) {
		numlist.sort( function (a,b) {return a - b} );

		return [ numlist[0], numlist[numlist.length - 1] ];
	}
}