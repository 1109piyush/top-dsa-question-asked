function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; // Return the index if the target is found
      }
    }
    return -1; // Return -1 if the target is not found
  }
  
  // Example usage:
  const numbers = [10, 7, 23, 5, 2, 15];
  const targetNumber = 5;
  const index = linearSearch(numbers, targetNumber);
  
  if (index !== -1) {
    console.log(`Target found at index ${index}`);
  } else {
    console.log("Target not found");
  }
  


  /* Javascript code to linearly search x in arr[].

function search(arr, n, x)
{
	for (let i = 0; i < n; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver code

	let arr = [ 2, 3, 4, 10, 40 ];
	let x = 10;
	let n = arr.length;

	// Function call
	let result = search(arr, n, x);
	(result == -1)
		? console.log("Element is not present in array")
		: console.log("Element is present at index " + result);

*/