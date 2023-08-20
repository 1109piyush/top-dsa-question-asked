function findSumPair(array, X) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
       const sum = array[left] + array[right];
       if (sum === X) {
          console.log(`Pair found at indices ${left} and ${right}`);
          return [left, right];
       } else if (sum < X) {
          left++;
       } else {
          right--;
       }
    }
    console.log('Pair not found');
    return null;
 }
 const array = [1, 3, 5, 7, 9];
 const X = 12;
 console.log(`Array: ${array}`);
 console.log(`Target sum: ${X}`);
 findSumPair(array, X);