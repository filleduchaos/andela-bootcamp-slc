'use strict'

module.exports = {
	// This function checks if a sequence is arithmetic or geometric.
	aritGeo: function(numlist) {
		// If numlist is not an array, return null
		if (!Array.isArray(numlist)) {
			return null;
		}

		// If numlist is an empty array, return zero
		if (numlist.length === 0) {
			return 0;
		}

		// If numlist is too small to be a sequence, return -1
		if (numlist.length === 1 || numlist.length === 2) {
			return -1;
		}

		/* Return 'Arithmetic and Geometric' if numlist is both.
			Return 'Arithmetic' if numlist is solely arithmetic.
			Return 'Geometric' if numlist is solely geometric.
		*/
		if (module.compute.isArithmetic(numlist.slice(1), numlist[1] - numlist[0])) {
			if (module.compute.isGeometric(numlist.slice(1), numlist[1] / numlist[0])) {
				return 'Arithmetic and Geometric';
			} else return 'Arithmetic';
		} else if (module.compute.isGeometric(numlist.slice(1), numlist[1] / numlist[0])) {
			return 'Geometric';
		} else return -1;
	}
}

module.compute = {
	// This function checks if a valid sequence is arithmetic.
	isArithmetic: function(numlist, diff) {
		if (numlist[1] - numlist[0] === diff) {
			if (numlist.length === 2) {
				return true;
			} else return true && this.isArithmetic(numlist.slice(1), numlist[1] - numlist[0]);	
		} else return false;
	},

	// This function checks if a valid sequence is geometric.
	isGeometric: function(numlist, ratio) {
		if (numlist[1] / numlist[0] === ratio) {
			if (numlist.length === 2) {
				return true;
			} else return true && this.isGeometric(numlist.slice(1), numlist[1] / numlist[0]);	
		} else return false;
	}
}