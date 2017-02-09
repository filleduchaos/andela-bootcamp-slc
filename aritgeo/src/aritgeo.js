'use strict'

module.exports = {
	aritGeo: function(numlist) {
		if (!Array.isArray(numlist)) {
			return null;
		}

		if (numlist.length === 0) {
			return 0;
		}

		if (numlist.length === 1 || numlist.length === 2) {
			return -1;
		}

		if (module.compute.isArithmetic(numlist.slice(1), numlist[1] - numlist[0])) {
			return 'Arithmetic';
		}
	}
}

module.compute = {
	isArithmetic: function(numlist, diff) {
		if (numlist[1] - numlist[0] === diff) {
			if (numlist.length === 2) {
				return true;
			} else return true && this.isArithmetic(numlist.slice(1), numlist[1] - numlist[0]);	
		} else return false;
	}
}