// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {

//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let col = 1 - n; col < n; col++) {
//             if (Math.abs(col) <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }

//         }
//         console.log(stair);
//     }

// }

// function pyramid(n) {
//     // midpoint will be fixed
//     let midpoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }

//         }
//         console.log(level);
//     }

// }

function pyramid(n, row = 0, level = '') {
    let midpoint = Math.floor((2 * n - 1) / 2)
    // base case - end of problem
    if (n === row)
        return;

    //result case - end of row and print stairs and go to next row invoation
    if (level.length === 2 * n - 1) {
        console.log(level); // print stair for the given row
        return pyramid(n, row + 1); // and call steps again for next row

    }



    // how to assign stairs 
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        level += '#';
    } else {
        level += ' ';
    }

    // call fn to updates stairs
    pyramid(n, row, level);
}



pyramid(2);

module.exports = pyramid;
