/*imp
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

Example 1:

Input:
N = 5
A[] = {1,2,3,5}
Output: 4
*/

function missing (arr , n){
    let sum = Math.floor((n+1)*(n+2)/2);
    for (let i = 0; i < n; i++)
    sum -= arr[i];
    return sum
}

 let arr = [1,2,4,5]
 let n = arr.length 
 let r = missing(arr,n)
 console.log(r)


