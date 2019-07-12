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
    let matrixArr = [];
    for (let i = 0; i < n; i++) {
        temp = [];
        for (j = 0; j < n; j++) {
            temp.push(0);
        }
        matrixArr.push(temp);
    }
    // console.log(matrixArr);
    debugger;

    while (col < n && row < n) {
        // left col to right col
        debugger;
        for (col = start; col < end; col++) {
            matrixArr[row][col] = counter++;
            // results.push(counter++);
        }
        debugger;
        col--;
        // row loop - up to down
        for (row = row + 1; row < end; row++) {
            matrixArr[row][col] = counter++;
            // results.push(counter++);
        }
        // start = row - 1;
        row--;
        debugger;

        for (col = col - 1; col >= start; col--) {
            matrixArr[row][col] = counter++;
            // results.push(counter++);
        }

        col++;
        debugger;

        for (row = row - 1; row > start; row--) {
            matrixArr[row][col] = counter++;
            // results.push(counter++);
        }
        row++;

        start++;
        end--;

    }

    console.log(matrixArr);
    return matrixArr;
    // matrixArr = chunk(matrixArr, n);
    // console.log(matrixArr);

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

    // console.log(chunked);
    return chunked;
}

// chunk(['1', '2', '3', '4', '5', '6', '7'], 2)

matrix(4);

module.exports = matrix;