// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {

    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

// function chunk(array, size) {

//     let chunked = [];

//     //loop all the array index
//     for (let element of array) {
//         let lastChunks = chunked[chunked.length - 1];

//         if (!lastChunks || lastChunks.length === size) {
//             chunked.push([element])
//         } else {
//             lastChunks.push(element);
//         }

//     }
//     // return the chunksArr
//     return chunked
// }

// function chunk(array, size) {
//     let chunks = [];
//     let chunked = [];

//     //loop all the array index
//     for (let element of array) {
//         //assign chunks
//         chunks.push(element);

//         //if chunks reaches the max size or end of loop -> add chunks to chunksArr
//         if (chunks.length === size || element == array[array.length - 1]) {
//             chunked.push(chunks);
//             chunks = [];
//         }
//     }
//     // return the chunksArr
//     return chunked
// }



module.exports = chunk;
