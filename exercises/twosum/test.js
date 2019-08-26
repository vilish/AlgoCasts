const twoSum = require('./index');

describe('twosum test suite', () => {

    test('two sum function exists', () => {
        expect(typeof (twoSum)).toEqual('function');
    });

    test('[-1, -2, -3, -4, -5] is two sum of value at indices 2 and 4 for -8', () => {
        expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });

    test('twoSum([2, 7, 11, 15], 9) equals [0,1]', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('twoSum([-3, 4, 3, 1], 90) equal 0', () => {
        expect(twoSum([-3, 4, 3, 1], 90)).toEqual([])
    });

    test('twoSum([-3, 4, 3, 1], -2) equal [0,3]', () => {
        expect(twoSum([-3, 4, 3, 1], -2)).toEqual([0, 3])
    });

    test('twoSum([0, 3, -3, 4, -1,2], -1) equal [0,4, 2, 5]', () => {
        expect(twoSum([0, 3, -3, 4, -1, 2], -1)).toEqual([0, 4, 2, 5])
    });

});

// const arr = [-1, -2, -3, -4, -5];
// console.log(twoSum(arr, -8));

// const arr1 = [2, 7, 11, 15];
// console.log(twoSum(arr1, 9));

// const arr2 = [-3, 4, 3, 90];
// console.log(twoSum(arr2, 0));

// const arr3 = [-3, 4, 3, 1];
// console.log(twoSum(arr3, -2))

// const arr4 = [0, 3, -3, 4, -1];
// console.log(twoSum(arr4, -1));