const strStr = require("../strStr/index");

function shorestPalindrome(str) {

    let midpoint = str.length / 2;

    let left, right;

    if (midpoint % 2 === 0) {
        left = str.substring(0, midpoint);
        right = str.substring(midpoint, str.length);
    } else {
        midpoint = Math.floor(midpoint);
        left = str.substring(0, midpoint);
        right = str.substring(midpoint + 1, str.length);
    }

    console.log(left);
    console.log(right);

    let matchIndex = strStr(left, right);
    console.log(matchIndex);

    if (matchIndex === -1) {
        for (let char of left) {
            str = char + str;
        }
        for (let char of right) {
            str = char + str;
        }
    }

    console.log(str);

}

shorestPalindrome("abcd");
// shorestPalindrome("abcde");


module.exports = shorestPalindrome;