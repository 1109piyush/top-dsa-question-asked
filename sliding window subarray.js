/* Returns true if the there is
a subarray of arr[] with sum equal to
	'sum' otherwise returns false.
Also, prints the result */
	
	function subArraySum(arr,n,sum)
	{
		let currentSum = arr[0], start = 0, i;

		// Pick a starting point
		for (i = 1; i <= n; i++) {
			// If currentSum exceeds the sum,
			// then remove the starting elements
			while (currentSum > sum && start < i - 1) {
				currentSum = currentSum - arr[start];
				start++;
			}

			// If currentSum becomes equal to sum,
			// then return true
			if (currentSum == sum) {
				let p = i - 1;
				console.log(
					"Sum found between indexes " + start
					+ " and " + p+"<br>");
				return 1;
			}

			// Add this element to currentSum
			if (i < n)
				currentSum = currentSum + arr[i];
		}

		console.log("No subarray found");
		return 0;
	}
	
	let arr=[15, 2, 4, 8, 9, 5, 10, 23 ];
	let n = arr.length;
	let sum = 23;
	subArraySum(arr, n, sum);
	
	// This code is contributed by unknown2108


    /*
    Initialize variables:

arr: [15, 2, 4, 8, 9, 5, 10, 23]
n (length of arr): 8
sum (target sum): 23
The for loop starts from the second element of the array (i = 1):

i = 1: currentSum is initially 15, start is 0.
while loop: currentSum > sum is 15 > 23, which is false, so it doesn't enter the loop.
currentSum becomes currentSum + arr[1] which is 15 + 2 = 17.
The loop continues:

i = 2: currentSum is 17, start is 0.
while loop: currentSum > sum is 17 > 23, which is false, so it doesn't enter the loop.
currentSum becomes currentSum + arr[2] which is 17 + 4 = 21.
The loop continues:

i = 3: currentSum is 21, start is 0.
while loop: currentSum > sum is 21 > 23, which is false, so it doesn't enter the loop.
currentSum becomes currentSum + arr[3] which is 21 + 8 = 29.
Now, currentSum exceeds the target sum of 23, so it enters the while loop:

while loop: currentSum is greater than sum, so it starts removing elements from the start.
currentSum becomes currentSum - arr[0] which is 29 - 15 = 14, and start becomes 1.
The loop continues:

i = 4: currentSum is 14, start is 1.
while loop: currentSum > sum is 14 > 23, which is false, so it doesn't enter the loop.
currentSum becomes currentSum + arr[4] which is 14 + 9 = 23.
Now, currentSum becomes equal to the target sum of 23, so it prints a message:

console.log("Sum found between indexes " + start + " and " + (i - 1) + "<br>"); prints "Sum found between indexes 1 and 3<br>".
The function returns 1 to indicate that it found a subarray with the target sum.

The program finishes.

So, in this example, the code found a subarray [2, 4, 8, 9] starting from index 1 to index 3 with a sum of 23.


    */
