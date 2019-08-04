// function longestPalindrome(s) {

//     let charMap = {};
//     let longestPalindrome = "";

//     s.split('').forEach((element, index) => {

//         if (charMap[element]) {
//             // console.log(charMap);
//             // check palindrome for each indices element to end in element array.            
//             charMap[element].forEach(element => {
//                 let newSubStr = s.substring(element, index + 1);
//                 if (palidrome(newSubStr)) {
//                     if (longestPalindrome.length < newSubStr.length) {
//                         longestPalindrome = newSubStr;
//                     }
//                 }

//             });

//         } else {
//             charMap[element] = [];
//         }


//         if (longestPalindrome.length === 0) {
//             longestPalindrome = element;
//         }


//         charMap[element].push(index);

//     });

//     return longestPalindrome;

// }

// function palidrome(s) {

//     let midpoint = Math.floor(s.length / 2);

//     for (let i = 0; i < midpoint; i++) {
//         if (s[i] != s[s.length - i - 1])
//             return false;
//     }
//     // console.log("  --> " + s + ' is a palidrome');
//     return true;
// }

function longestPalindrome(s) {

    let startIndex = 0;
    let maxLength = 1;

    function expandAroundMiddle(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalinLength = right - left + 1;
            if (currentPalinLength > maxLength) {
                maxLength = currentPalinLength;
                startIndex = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i - 1, i + 1);
        expandAroundMiddle(i, i + 1);
    }

    return s.slice(startIndex, startIndex + maxLength);

}

console.log(longestPalindrome('babadada'));

module.exports = longestPalindrome;