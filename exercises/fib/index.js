// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

    if (n === 0 || n === 1)
        return n;

    let element1 = 0,
        element2 = 1;

    for (let i = 1; i < n; i++) {
        num = element1 + element2;
        element1 = element2;
        element2 = num;
    }
    // console.log(num);
    return num;
}

// fib(2);
// fib(3);
// fib(4);
// fib(5);
// fib(6);
// fib(7);
// fib(8);
// fib(9);
// fib(39);

module.exports = fib;