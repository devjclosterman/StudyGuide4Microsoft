//With for Loop

let prev2 = 0;
let prev1 = 1;

console.log(prev2); //Prints first value
console.log(prev1); //Prints second value

for(let fibo = 0; fibo < 18; fibo++) {
    let newFibo = prev1 + prev2;
    console.log(newFibo); //Print the new Fibonacci number
    prev2 = prev1; //Shift prev2 to prev1
    prev1 = newFibo; //Update prev1 to the new Fibonacci number
}

// With Recursion
console.log(0); //Print first Fibonacci number
console.log(1); //Print second Fibonacci number
let count = 2;

function fibonacci(prev1, prev2) {
    if(count <= 19) { // Ensure recursion stops after printing 20 Fib nums
        let newFibo = prev1 + prev2;
        console.log(newFibo); //Print the next Fib num
        count++;
        fibonacci(newFibo, prev1); //Recurse with updated values
    } else {
        return; // Stop the recursion
    }
}

fibonacci(1, 0); // Initial call with the first two numbers


//Bubble sort 
function bubbleSort(myArray) {
    let n = myArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if(myArray[j] > myArray[j + 1]) {
                //Swap myArray[j] and myArray[j + 1]
                let temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
            }
            }
        }
    return myArray;  // Return the sorted array
}

// Example usage:
let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
let sortedArray = bubbleSort(myArray);
console.log("Sorted array:", sortedArray);

function bubbleSortOptimized(myArray1) {
    let n = myArray1.length;
    for(let i = 0; i < n - 1; i++) {
        let swapped = false; // Initialize swapped flag
        for(let j = 0; j < n - i - 1; j++) {
            if(myArray1[j] > myArray1[j + 1]) {
                //Swap myArray[j] and myArray[j + 1]
                let temp = myArray1[j];
                myArray1[j] = myArray1[j + 1];
                myArray1[j + 1] = temp;
                swapped = true; // Set swapped to true if a swap
            }
        }
        // If no elements were swapped, break the loop
        if(!swapped) {
            break;
        }
    }
    return myArray1;
}

let myArray1 = [7, 3, 9, 12, 11];
let sortedArray1 = bubbleSortOptimized(myArray);
console.log("Sorted array:", sortedArray);

function selectionSort(myArray) {
    let n = myArray.length;

    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the unsorted part of the array
        for(let j = i + 1; j < n; j++) {
            if(myArray[j] < myArray[minIndex]) {
                minIndex = j;
            }
        }

        //Remove the minimum value and insert it at the correct position
        let minValue = myArray.splice(minIndex, 1)[0]; //Use splice to remove element
        myArray.splice(i, 0, minValue); // Insert minValue at the correct position (i)
    }
    return myArray;
}

// let myArray = [64, 34, 25, 5, 22, 11, 90, 12];
// let sortedArray = selectionSort(myArray);
// console.log("Sorted array:", sortedArray);


function partition(array, low, high) {
    let pivot = array[high]; //Choose the last element as the pivot
    let i = low - 1; //Index of the smaller element

    //Rearrange elements so that elements smaller than pivot are on the left and larger ones on right
    for(let j = low; j < high; j++) {
        if(array[j] <= pivot) {
            i++;
            //Swap array[i] and array[j]
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    //Place the pivot in the correct position by swapping it with array[i + 1]
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1; // Return the pivot index
}

function quicksort(array, low = 0, high = array.length - 1) {
    if(low < high) {
        let pivotIndex = partition(array, low, high); //Get the pivot index

        //Recursively sort the elements before and after the pivot
        quicksort(array, low, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, high);
    }
}

// Example usage:
// let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
// quicksort(myArray);
// console.log("Sorted array:", myArray);

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr; //Base Case: if array has 1 or no elements, its already sorted
    }
    const mid = Math.floor(arr.length / 2); //Find the middle index
    const leftHalf = arr.slice(0, mid); //Left half of the array
    const rightHalf = arr.slice(mid); //Right half of the array

    //Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return mergeSort(sortedLeft, sortedRight); // Merge the two sorted halves
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    //Merge two sorted arrays into a single sorted array
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            results.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    //Append any remaining elements from the left or right arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
}
let unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13];
let sortedArr = mergeSort(unsortedArr);
console.log("Sorted array:", sortedArr);

function binarySearch(arr, targetVal) {
    console.log("arr: ", arr, "targetVal: ", targetVal)
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left, right) / 2); //Calculate the middle index

        if(arr[mid] === targetVal) {
            return mid; //Target value found, return the index
        }

        if(arr[mid] < targetVal) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }
    return -1; //Target value not found
}

let myArray3 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let myTarget = 15;

let result = binarySearch(myArray3, myTarget);

if (result !== -1) {
    console.log("Value", myTarget, "found at index", result);
} else {
    console.log("Target not found in array.");
}













