// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    const results = [];
    let counter = 1;
    let col = 0,
        row = 0;

    let start = 0,
        end = n;
    let matrixArr = new Array(n);
    debugger;

    while (col < n && row < n) {
        // left col to right col
        debugger;
        let rowArr = [];
        for (col = start; col < end; col++) {
            // rowArr.push(counter++);
            results.push(counter++);
        }
        debugger;
        col--;
        // row loop - up to down
        for (row = row + 1; row < end; row++) {
            // results[row][col].push(counter++);
            results.push(counter++);
        }
        // start = row - 1;
        row--;
        debugger;

        for (col = col - 1; col >= start; col--) {
            results.push(counter++);
        }

        col++;
        debugger;

        for (row = row - 1; row > start; row--) {
            results.push(counter++);
        }
        row++;

        start++;
        end--;

    }

    console.log(results);

    matrixArr = chunk(results, n);
    console.log(matrixArr);

}


const chunk = (arr, n) => {
    let chunked = [];
    let temp = [];
    for (let index in arr) {
        if (index % n === 0 && index != 0) {
            chunked.push(temp);
            temp = [];
        }
        temp.push(arr[index]);
    }
    if (temp.length > 0)
        chunked.push(temp);

    console.log(chunked);
    return chunked;
}

// chunk(['1', '2', '3', '4', '5', '6', '7'], 2)

matrix(4);

module.exports = matrix;