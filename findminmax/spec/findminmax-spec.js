(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-12, 19] for [-1, 4, 0, -12, 6, 19]', function () {
        expect(findMinMax([-1, 4, 0, -12, 6, 19])).toEqual([-12, 19]);
      });

      it('should return [-1.4, 15] for [0.2, 1, 15, 7.6, -1.4]', function () {
        expect(findMinMax([0.2, 1, 15, 7.6, -1.4])).toEqual([-1.4, 15]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [-100] for [-100, -100, -100]', function () {
        expect(findMinMax([-100, -100, -100])).toEqual([-100]);
      });

    });

    describe('Return an empty list `[]` when the list is empty', function () {

      it('should return [] for []', function () {
        expect(findMinMax([])).toEqual([]);
      });

    })

    describe('Return null when the list does not consist of numbers', function () {

      it('should return null for ["a", "b", "c"]', function () {
        expect(findMinMax(["a", "b", "c"])).toBeNull());
      });

      it('should return null for [true, false, false, true, true, false, true]', function () {
        expect(findMinMax([true, false, false, true, true, false, true])).toBeNull());
      });

    });

  });

})();