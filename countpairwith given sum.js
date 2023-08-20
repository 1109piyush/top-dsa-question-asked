
// Javascript implementation of simple method to find count of
// pairs with given sum.

// Returns number of pairs in arr[0..n-1] with sum equal
// to 'sum'
function getPairsCount(arr, n, sum)
{
	let count = 0; // Initialize result

	// Consider all possible pairs and check their sums
	for (let i = 0; i < n; i++)
		for (let j = i + 1; j < n; j++)
			if (arr[i] + arr[j] == sum)
				count++;

	return count;
}

// Driver function to test the above function
	let arr = [ 1, 5, 7, -1, 5 ];
	let n = arr.length;
	let sum = 6;
	document.write("Count of pairs is "
		+ getPairsCount(arr, n, sum));
	
/*

<script>
// javascript implementation of simple method to find count of
// pairs with given sum.

	// Returns number of pairs in arr[0..n-1] with sum equal
	// to 'sum'
	function getPairsCount(arr , n , k) {
		var m = new Map();
		var count = 0;
		for (var i = 0; i < n; i++) {
			if (m.has(k - arr[i])) {
				count += m.get(k - arr[i]);
			}
			if (m.has(arr[i])) {
				m.set(arr[i], m.get(arr[i]) + 1);
			} else {
				m.set(arr[i], 1);
			}
		}
		return count;
	}

	// Driver function to test the above function
		var arr = [ 1, 5, 7, -1 ];
		var n = arr.length;
		var sum = 6;
		document.write("Count of pairs is " + getPairsCount(arr, n, sum));

// This code is contributed by umadevi9616
</script>



*/

