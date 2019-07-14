// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// // iterative solution
// function fib(n) {

//     if (n === 0 || n === 1)
//         return n;

//     let element1 = 0,
//         element2 = 1;

//     for (let i = 1; i < n; i++) {
//         num = element1 + element2;
//         element1 = element2;
//         element2 = num;
//     }
//     // console.log(num);
//     return num;
// }

// // iterative solution fibonacci series
// function fib(n) {

//     let results = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         // result[i]=results[i-1];results[i-2]; 
//         results.push(results[i - 1] + results[i - 2]);
//     }

//     let num = results[n];
//     console.log(num);
//     return num;
// }

// // recursive solution
// function fib(n) {

//     if (n === 0 || n === 1) // n<2
//         return n;

//     return fib(n - 1) + fib(n - 2);

// }

// recursive solution
// function fib(n, results = [0, 1]) {

//     if (n === 0 || n === 1) // n<2
//         return results[n];

//     return fib(n - 1) + fib(n - 2);

// }

function memoizer(fn) {

    let cache = {};
    debugger;
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        // cache.push(result);
        cache[args] = result;
        return result;
    };

}

function slowFib(n) {
    debugger;
    if (n < 2)
        return n;

    return fib(n - 1) + fib(n - 2);

}

const fib = memoizer(slowFib);

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
fib(4);
// fib(39);

module.exports = fib;