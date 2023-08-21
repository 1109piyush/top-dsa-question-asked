// Function to find the maximum contiguous subarray and print it
function maxSubArraySum(a, size)
{
    var maxint = Math.pow(2, 53); // maxint is set to the maximum possible value in JavaScript
    var max_so_far = -maxint - 1; // Initialize max_so_far to a very small number
    var max_ending_here = 0; // Initialize max_ending_here as 0
    var start = 0; // Initialize the start index of the maximum subarray
    var end = 0; // Initialize the end index of the maximum subarray
    var s = 0; // Initialize the start index of the current subarray

    for (var i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + a[i]; // Add the current element to max_ending_here

        if (max_so_far < max_ending_here)
        {
            max_so_far = max_ending_here; // If max_ending_here is greater than max_so_far, update max_so_far
            start = s; // Update the start index of the maximum subarray
            end = i; // Update the end index of the maximum subarray
        }

        if (max_ending_here < 0)
        {
            max_ending_here = 0; // If max_ending_here becomes negative, reset it to 0
            s = i + 1; // Update the start index of the current subarray
        }
    }
    
    // Extract the maximum subarray
    var maxSubArray = a.slice(start, end + 1);

    return {
        maxSum: max_so_far,
        maxSubArray: maxSubArray
    };
}

// Driver code
var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
var result = maxSubArraySum(a, a.length);

console.log("Maximum contiguous subarray is", result.maxSubArray);
console.log("Maximum contiguous sum is", result.maxSum);
