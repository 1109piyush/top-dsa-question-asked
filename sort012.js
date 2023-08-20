/* imp
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
*/

// Javascript program to sort an array of 0, 1 and 2

	// Sort the input array, the array is assumed to
	// have values in {0, 1, 2}
	function sortColors(nums) {
		let p0 = 0;
		let curr = 0;
		let p2 = nums.length - 1;
	 
		while (curr <= p2) {
			if (nums[curr] === 0) {
				// shifting left to right and swapping if we get 0
				[nums[p0], nums[curr]] = [nums[curr], nums[p0]];
				p0++;
				curr++;
			} else if (nums[curr] === 2) {
				[nums[curr], nums[p2]] = [nums[p2], nums[curr]];
				p2--;
			} else {
				curr++;
			}
		}
	}

	
	let nums = [2,0,2,1,1,0]
	sortColors(nums)
