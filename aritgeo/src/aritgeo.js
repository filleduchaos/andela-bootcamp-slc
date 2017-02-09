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
	}
}