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

    if (arr.length === 1)
        return arr;

    let center = Math.floor(arr.length / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));

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

function quicksort(arr) {
    return quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
    // exit if all comparison are done from left to right of pivot
    if (left >= right) {
        return;
    }

    // declare pivot;
    let pivot = arr[Math.floor((left + right) / 2)];



    // Step2. partition the array around the pivot - return the index of partion.
    let index = partition(arr, left, right, pivot);


    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);

    return arr;

}

function partition(arr, left, right, pivot) {

    while (left <= right) {
        // move left untill you find an element bigger than pivot 
        while (arr[left] < pivot)
            left++;

        // move right untill you find an element smaller or equals to pivot
        while (arr[right] > pivot)
            right--;

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    // when we get here. everything in partion will be in the right order
    // now return the next partion point, which will be left.
    return left;
}

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

const arr = [100, -40, 500, -124, 0, 21, 7];
mergeSort(arr);

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
    merge,
    quicksort
};