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

// 680. Valid Palindrome II
// Easy

// Given a non-empty string s, you may delete at most one character. 
// Judge whether you can make it a palindrome.

const palindrome_valid = (str) => {
    const len = str.length;
    let skip = false;

    let i = 0,
        j = len - 1;

    while (i <= j) {
        debugger;
        if (str[i] === str[j] || !skip) {
            if (str[i] === str[j - 1])
                j--;
            else if (str[i + 1] === str[j])
                i++;
            skip = true;
        } else {
            console.log(str + "  is NOT valid palindrome")
            return false;
        }
        debugger;
        i++;
        j--;
    }
    console.log(str + "  is valid palindrome")
    return true;
}

palindrome_valid("abca")

module.exports = palindrome;