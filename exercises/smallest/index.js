// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let spi = 1;

    for (let i = 0; i < A.length; i++) {

        A[i] === spi ? spi++ : spi;

        for (let j = i + 1; j < A.length; j++) {

            if (spi === A[j]) {
                spi++;
            }


        }
    }

    console.log(spi);
    return spi;

}

solution([1, 2, 3, 7]);
solution([-1, -2]);
solution([1, 6, 2, 3, 7]);
solution([1]);

module.exports = solution;