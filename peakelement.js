function findPeak(arr, n) {
    let start = 0;
    let end = n - 1;
    
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > arr[mid + 1]) {
        
        // You are in the decreasing part of the array.
        // This may be the answer, but look at the left side too.
        // This is why end !== mid - 1.
        end = mid;
        } else {
        // You are in the increasing part of the array.
        // Because we know that mid+1 element > mid element.
        start = mid + 1;
        }
    }
    
    // In the end, start === end and pointing to the largest number
    // because of the two checks above.
    // start and end are always trying to find the max element in
    // the above two checks, hence when they are pointing to just one
    // element, that is the max one because that is what the checks say.
    // More elaboration: at every point of time for start and end,
    // they have the best possible answer till that time and if we
    // are saying that only one item is remaining, hence because of
    // the above line that is the best possible answer.
    return start; // Or return end;
    }
    
    // Driver Code
    const arr = [1, 3, 20, 4, 1, 0];
    const n = arr.length;
    console.log(`Index of a peak point is ${findPeak(arr, n)}`);
    