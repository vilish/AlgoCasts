// 28. Implement strStr()
// Easy

// 1003

// 1449

// Favorite

// Share
// Implement strStr().

// Return the index of the first occurrence of needle in haystack,
//  or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? 
// This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0
//  when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {

//     if (!needle) {
//         return 0;
//     }

//     if (needle.length > haystack.length) {
//         return -1;
//     }


//     let i = 0;

//     while (i < haystack.length) {

//         if (haystack[i] === needle[0]) {
//             let j = 1;
//             while (j < needle.length && haystack[i + j] === needle[j]) {
//                 j++;
//             }

//             if (j === needle.length) {
//                 return i;
//             }

//         }
//         i++;



//     }

//     return -1;

// };

var strStr = function (haystack, needle) {

    let i = 0; // for haystack
    let j = 0; // for needle

    let ips = computeIps(needle);
    // console.log(ips);

    while (i < haystack.length) {

        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }

        if (j === needle.length) {
            return i - j;
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

    return -1;

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

module.exports = strStr;

// computeIps();


// let firstIndex = strStr("mississippi", "issip")
// console.log(firstIndex);

// firstIndex = strStr("aaa", "aaaa")
// console.log(firstIndex);

// firstIndex = strStr("", "aaaa")
// console.log(firstIndex);

// firstIndex = strStr("a", "a")
// console.log(firstIndex);

// firstIndex = strStr("hello", "o")
// console.log(firstIndex);

// firstIndex = strStr("hello", "ll")
// console.log(firstIndex);

// firstIndex = strStr("hello", "k")
// console.log(firstIndex);