// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    let wordRegex = /[^\w]/g;
    // get only letters from given strings
    let aChars = stringA
        .replace(wordRegex, "")
        .toLowerCase();

    let bChars = stringB
        .replace(wordRegex, "")
        .toLowerCase();

    let match = false;

    if (aChars.length === bChars.length) {
        let wordASorted = aChars.split('').sort().join('');
        let wordBSorted = bChars.split('').sort().join('');

        if (wordASorted === wordBSorted)
            match = true;
    }
    return match;
}

// function anagrams(stringA, stringB) {
//     let wordRegex = /[^\w]/g;
//     // get only letters from given strings
//     let aLetters = stringA.replace(wordRegex, "").toLowerCase();
//     let bLetters = stringB.replace(wordRegex, "").toLowerCase();;

//     // get map of letter and their count in the word
//     let aCharMap = buildCharMap(aLetters);
//     let bCharMap = buildCharMap(bLetters);

//     let aLettersCount = Object.keys(aCharMap).length;
//     let bLettersCount = Object.keys(bCharMap).length;;

//     // for (let i in stringACharMap) wordACounter++;
//     // for (let i in stringBCharMap) wordBCounter++;

//     let match = false;

//     // length should be equal
//     if (aLettersCount === bLettersCount) {
//         // loop are letter in wordA
//         for (let aLetter in aCharMap) {
//             match = false;
//             for (let bLetter in bCharMap) {
//                 if (aLetter === bLetter &&
//                     aCharMap[aLetter] == bCharMap[bLetter]) {
//                     match = true;
//                     break;
//                 }
//             }
//             if (!match) {
//                 break;
//             }
//         }
//     }

//     return match;

// }

// const buildCharMap = (word) => {
//     let charMap = {};
//     for (let character of word) {
//         charMap[character] = charMap[character] + 1 || 1;
//     }
//     return charMap
// }

module.exports = anagrams;
