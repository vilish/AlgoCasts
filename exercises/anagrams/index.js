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
    let wordA = stringA.replace(wordRegex, "").toLowerCase();
    let wordB = stringB.replace(wordRegex, "").toLowerCase();;

    // get map of letter and their count in the word
    let wordAMap = getLetterCountMap(wordA);
    let wordBMap = getLetterCountMap(wordB);

    let wordACounter = 0;
    let wordBCounter = 0;
    for (let i in wordAMap) wordACounter++;
    for (let i in wordBMap) wordBCounter++;

    let match = false;

    // length should be equal
    if (wordACounter === wordBCounter) {
        // loop are letter in wordA
        for (let letterInWordA in wordAMap) {
            match = false;
            for (let letterInWordB in wordBMap) {
                if (letterInWordA === letterInWordB &&
                    wordAMap[letterInWordA] == wordBMap[letterInWordB]) {
                    match = true;
                    break;
                }
            }
            if (!match) {
                break;
            }
        }
    }

    return match;

}

const getLetterCountMap = (word) => {
    let wordMap = {};
    for (let characters of word) {
        wordMap[characters] = wordMap[characters] + 1 || 1;
    }
    return wordMap
}

module.exports = anagrams;
