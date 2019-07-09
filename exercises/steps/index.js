// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {

//     for (row = 0; row < n; row++) {
//         let step = '';
//         for (let col = 0; col < n; col++) {
//             if (col <= row)
//                 step += '#';
//             else
//                 step += ' ';
//         }
//         console.log(step);
//     }

// }

function steps(n, row = 0, stairs = '') {

    // base case - end of problem
    if (n === row)
        return;

    //result case - end of row and print stairs and go to next row invoation
    if (stairs.length === n) {
        console.log(stairs); // print stair for the given row
        return steps(n, row + 1); // and call steps again for next row

    }

    // how to assign stairs 
    if (stairs.length <= row) {
        stairs += '#';
    } else {
        stairs += ' ';
    }

    // call fn to updates stairs
    steps(n, row, stairs);
}

module.exports = steps;
