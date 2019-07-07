// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    let chunks = [];
    let chunksArr = [];
    let counter = 0;

    //loop all the array index
    for (let index in array) {
        //assign chunks
        chunks[index % size] = array[index];

        //if chunks reaches the max size or end of loop -> add chunks to chunksArr
        if (chunks.length === size || index == array.length - 1) {
            chunksArr[counter++] = chunks;
            chunks = [];
        }
    }
    // return the chunksArr
    return chunksArr
}



module.exports = chunk;
