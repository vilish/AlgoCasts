// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str[i - 1] === ' ')
            result += str[i].toUpperCase();
        else
            result += str[i];
    }
    return result;
}


// solution without split
// const capitalize = (str) => {
//     let word = '';
//     let wordArr = [];
//     for (let letter of str) {
//         if (letter === ' ' ) {
//             wordArr = wordArr.concat(word[0].toUpperCase() + word.slice(1));
//             word = '';
//             continue;
//         } else {
//             word += letter;
//         }
//     }
//     if (word !== '')
//         wordArr = wordArr.concat(word[0].toUpperCase() + word.slice(1));

//     console.log(wordArr);
//     return wordArr.join(' ');
// }

capitalize("hello word there");

// solution using str to array, then split by space to get a word, 
// uppercase first letter of word and assign to new arr with uncganged rest of the word.
// function capitalize(str) {

//     let capitalizeStrArr = [];

//     for (let word of str.split(' ')) {
//         // if (word.trim() !== '') // when there are many spaces in sentence, ignore empty word
//         capitalizeStrArr.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return capitalizeStrArr.join(' ');
// }

module.exports = capitalize;
