/*
Given an array, rotate the array by one position in clock-wise direction.
1) Store last element in a variable say x. 
2) Shift all elements one position ahead. 
3) Replace first element of array with x.
 

Example 1:

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
Output:
5 1 2 3 4

*/
// JavaScript code for program
// to cyclically rotate
// an array by one
function rotate(arr, n)
{
var x = arr[n-1], i;
for(i = n-1; i > 0; i--)
	arr[i] = arr[i-1];
arr[0] = x;
}

var arr = [1, 2, 3, 4, 5];
var n = arr.length;


rotate(arr, n);

console.log(arr);
	
