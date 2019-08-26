// Given an array of integers, return indices of the two numbers such that
// they add up to a specific target.

// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// const twoSum = (nums, target) => {

//     let results = [];

//     nums.forEach((element, index) => {
//         for (let j = index + 1; j < nums.length; j++) {

//             if (element + nums[j] === target) {
//                 results.push(index, j);
//             }
//         }
//     });

//     return results;

// }

const twoSum = (nums, target) => {

    let results = [];
    let numMap = {};

    nums.forEach((element, index) => {

        if (numMap[target - element] || numMap[target - element] === 0) {
            results.push(numMap[target - element], index);
        }

        numMap[element] = index;
    });

    return results;

}



module.exports = twoSum;

// const arr = [-1, -2, -3, -4, -5];
// console.log(twoSum(arr, -8));

const arr1 = [2, 7, 11, 15];
console.log(twoSum(arr1, 9));

// const arr2 = [-3, 4, 3, 90];
// console.log(twoSum(arr2, 0));

// const arr3 = [-3, 4, 3, 1];
// console.log(twoSum(arr3, -2))

// const arr4 = [0, 3, -3, 4, -1];
// console.log(twoSum(arr4, -1));