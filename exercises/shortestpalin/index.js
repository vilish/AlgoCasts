const strStr = require("../strStr/index");


function shortestP(str) {
    let addChars = [];
    let len = str.length;
    let midpoint = Math.floor(len / 2);

    let i = 0;
    let j = len - 1;

    while (i > j) {
        if (str[j] === str[i]) {
            j--;
            i++;
        }

        i++;
    }


    let result = addChars.join('') + str;
    console.log('addChars   ' + addChars.join(''))
    console.log('result   ' + result)
}

function shorestPalindrome(str) {

    let midpoint = str.length / 2;

    let left, right;

    midpoint = Math.floor(midpoint);
    left = str.substring(0, midpoint);
    right = str.substring(midpoint, str.length);

    console.log(left);
    console.log(right);

    let matchIndex = strStr(left, right);
    // let matchIndex = misLetters(left, right);
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

var misLetters = function (haystack, needle) {

    let misssingLetters = [];

    let i = 0; // for haystack
    let j = needle.length - 1; // for needle

    let ips = computeIps(needle);
    // console.log(ips);

    while (i < haystack.length) {

        if (haystack[i] !== needle[j]) {
            // i++;
            j--;
        }

        if (j === 0) {
            // return needle[length-1 ... 0];
        }
        // mismatch after j matches
        else if (i < haystack.length && haystack[i] !== needle[j]) {
            // Do not match lps[0..lps[j-1]] characters, 
            // they will match anyway 
            if (j !== 0) {
                j = ips[j - 1];
            } else {
                i++;
            }

        }

    }

    // console.log(misssingLetters);

    return misssingLetters;

    // return -1;

}



function computeIps(str) {

    let arr = str.split('');

    let j = 0;
    let i = 0;

    let ips = [i++];

    while (i < arr.length) {
        if (arr[j] === arr[i]) {
            ips.push(++j);
            i++;
        } else {

            if (j != 0) {
                j = ips[j - 1];
            } else {
                ips.push(j);
                i++;
            }
        }
    }

    return ips;

}



shortestP("abaa");
shortestP("abcd");
shortestP("abc");


module.exports = shorestPalindrome;