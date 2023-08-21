function isSubset(arr1, arr2) {
    let s = new Set();
    // set unique value
    
    // Add all elements of arr1 to the set s
    for (let i = 0; i < arr1.length; i++) {
      s.add(arr1[i]);
    }
    
    // Store the size of the set before adding elements of arr2
    let originalSize = s.size;

    // for (let i = 0; i < arr2.length; i++) { s.add(arr2[i]); }: This loop iterates through each element in arr2 and adds it to the Set s. This is done to merge the unique elements of both arr1 and arr2 into s.


    
    // Add elements of arr2 to the set
    for (let i = 0; i < arr2.length; i++) {
      s.add(arr2[i]);
    }
  
    // If the size of the set hasn't changed, arr2 is a subset of arr1
    if (s.size == originalSize) {
      return "Yes";
    } else {
      return "No";
    }
  }
  
  let arr1 = [11, 1, 13, 21, 3, 7];
  let arr2 = [11, 3, 7, 1];
  let result = isSubset(arr1, arr2);
  console.log("Is arr2[] a subset of arr1[]? " + result);
  