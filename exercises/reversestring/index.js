// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let len = str.length;
    let newStr = '';

    if (len < 2) {
        return str;
    }

    for (let i = 0; i < len; i++) {
        newStr = newStr + str[len - 1 - i];
    }
    return newStr;
}

module.exports = reverse;
