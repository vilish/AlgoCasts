// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let isNegative = false;
    if (Math.sign(n) === -1) {
        isNegative = true;
        n = Math.abs(n);
    }

    let reversed = '';

    reversed = n
        .toString()
        .split('')
        .reduce((reversed, char) => char + reversed, '');


    console.log('reversed   ' + reversed);

    return parseInt(reversed) * (isNegative ? -1 : 1);

}

reverseInt(100);

module.exports = reverseInt;
