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
    let reversedString = n
        .toString()
        .split('')
        .reduce((reversed, char) => char + reversed, '');

    let result = parseInt(reversedString) * Math.sign(n);

    if (result > 0 && result > (Math.pow(2, 31) - 1)) {
        return 0;
    }

    if (result < 0 && result < (-Math.pow(2, 31))) {
        return 0;
    }

    return result;

}

// function reverseInt(x) {
//     let reverse = 0;
//     let tentimes = 0;
//     let sign = Math.sign(x);
//     let num = parseInt(x);
//     console.log(num);
//     let lastDigit = 0;
//     debugger;
//     while (num > 10) {
//         lastDigit = num % 10;
//         console.log(num + " -  " + lastDigit + "  -  " + reverse + "  -  " + tentimes);
//         reverse = parseInt(reverse * Math.pow(10, tentimes)) + parseInt(lastDigit);
//         console.log(reverse)
//         num = Math.floor(num / 10);
//         tentimes++
//     }

//     if (num !== 0)
//         reverse += lastDigit + reverse * Math.pow(10, tentimes);

//     let result = parseInt(reverse) * Math.sign(x);

//     console.log(result)

//     if (result > 0 && result > (Math.pow(2, 31) - 1)) {
//         return 0;
//     }

//     if (result < 0 && result < (-Math.pow(2, 31))) {
//         return 0;
//     }

//     return result;

// }


reverseInt(1112);


module.exports = reverseInt;