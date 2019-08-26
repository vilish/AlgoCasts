// Group Anagrams
// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

const anagrams = (str1, str2) => {

    return str1.split('').sort().join('') === str2.split('').sort().join('');

}

const groupAnagrams = (strs) => {

    let result = [];

    for (let i; i < strs.length - 1; i++) {

        let str = strs[i];
        for (let j = i; j < strs.length; j++) {

        }

    }


}

let isAnagrams = anagrams("eat", "ate");
console.log(isAnagrams);

isAnagrams = anagrams("eat", "atew");
console.log(isAnagrams);