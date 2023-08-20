// Program to implement iterative Binary Search
// divide array in 2 parts


// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

function binarySearch(arr, x)
{
	let l = 0;
	let r = arr.length - 1;
	let mid;
	while (r >= l) {
		mid = l + Math.floor((r - l) / 2);

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		// check if middle is greater or not
		if (arr[mid] > x)
			r = mid - 1;
			
		// Else the element can only be present
		// in right subarray
		// middle is smaller so we change l and go to while loop again and than again it start going
		else
			l = mid + 1;
	}

	// We reach here when element is not
	// present in array
	return -1;
}

	arr =new Array(2, 3, 4, 10, 40);
	x = 10;
	n = arr.length;
	result = binarySearch(arr, x);
	
(result == -1) ? console.log("Element is not present in array")
			: console.log ("Element is present at index " + result);
				
// This code is contributed by simranarora5sos and rshuklabbb


/*
Sure! Let's walk through a step-by-step example of how the binary search algorithm works on a sorted array. Consider the following sorted array:

css
Copy code
arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Let's search for the target element x = 12 in this array using the binary search algorithm:

Step 1: Initialize l and r:

makefile
Copy code
l = 0
r = 9 (length of arr - 1)
Step 2: Calculate mid and check if arr[mid] equals x:

scss
Copy code
mid = l + Math.floor((r - l) / 2) = 0 + Math.floor((9 - 0) / 2) = 0 + Math.floor(9 / 2) = 0 + 4 = 4

arr[4] = 10 (not equal to 12)
Step 3: arr[mid] (10) is smaller than x (12), so update l to mid + 1 and continue the loop:

makefile
Copy code
l = mid + 1 = 4 + 1 = 5
Step 4: Calculate mid again and check if arr[mid] equals x:

scss
Copy code
mid = l + Math.floor((r - l) / 2) = 5 + Math.floor((9 - 5) / 2) = 5 + Math.floor(4 / 2) = 5 + 2 = 7

arr[7] = 16 (not equal to 12)
Step 5: arr[mid] (16) is greater than x (12), so update r to mid - 1 and continue the loop:

makefile
Copy code
r = mid - 1 = 7 - 1 = 6
Step 6: Calculate mid again and check if arr[mid] equals x:

scss
Copy code
mid = l + Math.floor((r - l) / 2) = 5 + Math.floor((6 - 5) / 2) = 5 + Math.floor(1 / 2) = 5 + 0 = 5

arr[5] = 12 (equal to 12 - Element found!)
Since arr[mid] is equal to the target element x, which is 12, the algorithm returns mid, which is 5, as the index where x is found in the array.

In summary, the binary search algorithm successfully found the target element 12 in the sorted array at index 5. The key to the efficiency of binary search is that it divides the search space in half with each iteration, allowing it to find the target element in a logarithmic number of steps, which is much faster than a linear search in most cases.
*/