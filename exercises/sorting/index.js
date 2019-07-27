// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (i !== indexOfMin) {
            let lesser = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = lesser;
        }
    }
    return arr;

}

function mergeSort(arr) {

    let half = Math.floor(arr.length / 2);
    let left = arr.slice(0, half);
    let right = arr.slice(half);

    if (half > 1) {
        left = mergeSort(left);
        right = mergeSort(right);
    } 

    return merge(left, right);

}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] < right[0])
            result.push(left.shift())
        else
            result.push(right.shift());
    }

    return [...result, ...left, ...right];
}

const arr = [100, -40, 500, -124, 0, 21, 7];
mergeSort(arr);

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
    merge
};