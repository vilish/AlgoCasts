// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const palindrome = (str) => {
//     const len = str.length;

//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i])
//             return false;

//         return true;
//     }

// }

// const palindrome = (str) => {
//     let reversed = str.split('').reverse().join('');
//     return reversed === str;
// }

const palindrome = (str) => {
    const len = str.length;

    return str.split('').every((char, index) =>
        char === str[len - 1 - index]
    );

}

module.exports = palindrome;
