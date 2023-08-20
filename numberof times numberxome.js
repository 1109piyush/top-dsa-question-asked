// JavaScript program for the above approach
// map is like key value pair 
// we  make map that key has number value number odf occurence
// mp.get means if number is present that change value by one 

// Function to count occurrences
function countOccurrences(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++;
        }
    }
    return count;
}

let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let x = 2;

console.log(x + " occurs " + countOccurrences(arr, x) + " times");


