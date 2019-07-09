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

function pyramid(n) {

    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let col = 1 - n; col < n; col++) {
            if (Math.abs(col) <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }

        }
        console.log(stair);
    }

}

pyramid(4);

module.exports = pyramid;
