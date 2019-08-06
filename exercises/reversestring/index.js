// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';

    for (let characters of str) {
        reversed = characters + reversed;
    }

    // str.split('').forEach(character => {
    //     reversed = character + reversed;
    // });

    // for (let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed;
    // }

    return reversed;
}

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, char) => {
//         return char + reversed;
//     }, '');
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, char) => char + reversed, '');
// }

// const reverse = (str) => {
//     return str.split('').reduce((reversed, char) => char + reversed, '');
// }

module.exports = reverse;