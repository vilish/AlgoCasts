// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// const maxChar = (str) => {
//     const chars = {};

//     let max = 0;
//     let maxChar;

//     for (let character of str) {
//         chars[character] = chars[character] + 1 || 1;
//         if (chars[character] > max && character !== maxChar) {
//             max = chars[character];
//             maxChar = character;
//         }

//     }
//     return maxChar;
// }


const maxChar = (str) => {
    const chars = {};

    let max = 0;
    let maxChar;

    for (let character of str) {
        chars[character] = chars[character] + 1 || 1;

        // if (!chars[character]) {
        //     chars[character] = 1;
        // } else {
        //     chars[character]++;
        // }
    }

    for (let index in chars) {
        if (chars[index] > max) {
            max = chars[index];
            maxChar = index;
        }

    }
    return maxChar;
}

// const unique = (str) => {
//     const chars = {};

//     for (let character of str) {
//         chars[character] = chars[character] + 1 || 1;
//     }
//     console.log(chars);
//     for (let i in chars) {
//         if (chars[i] > 1)
//             return false;
//     }
//     return true;
// }

const unique = (str) => {
    const chars = {};

    for (let character of str) {
        if (!chars[character]) {
            chars[character] = 1;
        } else {
            console.log('first duplicate char is   '+character);
            return false;
        }
    }
    return true;
}

module.exports = {
    maxChar,
    unique
};