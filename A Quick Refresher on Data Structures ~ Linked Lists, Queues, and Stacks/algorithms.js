const linearSearch = (arr, val) => {
    for (let i of arr) {
        if (i == val) return true;
    }
    return false;
};

const binarySearch = (arr, val) => {
    if (!arr.length) return false;  // base case - array has nothing, so val doesn't exist in the orginal array
    let midPos = Math.floor(arr.length / 2);  // get position of middle element in array
    if (arr[midPos] > val) return binarySearch(arr.slice(0, midPos), val);  // search left half of array because current number is bigger than value
    else if (arr[midPos] < val) return binarySearch(arr.slice(midPos + 1, arr.length), val);  // search right half of array because current number is smaller than value
    return true;  // value was found
};

const selectionSort = (arr) => {
    if (arr.length < 2) return arr;  // nothing to be sorted
    for (let i = 0; i < arr.length; i++) {
        let smallest = arr[i], smallestPos = i;  // variables used for keeping track of smallest number from ith item to last item in array
        for (let j = i + 1; j < arr.length; j++) {  // go through items after ith item
            if (arr[j] < smallest) {  // smaller number than current smallest number
                smallest = arr[j];
                smallestPos = j;
            }
        }
        // now swap
        arr[smallestPos] = arr[i];
        arr[i] = smallest;
    }
    return arr;
};

const bubbleSort = (arr) => {
    if (arr.length < 2) return arr;  // nothing to be sorted
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];  // temporary variable for swapping
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped) return arr;  // bubble sort didn't swap any values because all values are sorted already
        swapped = false;
    }
    return arr;
};

const merge = (leftArr, rightArr) => {
    let mergedArr = [];
    while (leftArr.length && rightArr.length) {  // still haven't run out of elements
        if (leftArr[0] < rightArr[0]) mergedArr.push(leftArr.shift());  // remove first element from leftArr and add it to mergedArr if left element is smaller
        else mergedArr.push(rightArr.shift());  // remove first element from rightArr and add it to mergedArr if right element is smaller
    }
    return [...mergedArr, ...leftArr, ...rightArr];  // return mergedArr and whatever leftover elements are in leftArr and rightArr
};

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;  // base case
    let midPos = Math.floor(arr.length / 2);  // get position of middle element in array, which will be used to split the array in half
    let leftArr = mergeSort(arr.splice(0, midPos)), rightArr = mergeSort(arr);
    return merge(leftArr, rightArr);
};
