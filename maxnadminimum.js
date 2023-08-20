


 /*
  return [Math.min(...num), Math.max(...num)];
  */




  
  
  function findMinAndMax(nums, left, right) {
    if (left === right) {
      return [nums[left], nums[left]];
    }
  
    if (right - left === 1) {
      return [Math.min(nums[left], nums[right]), Math.max(nums[left], nums[right])];
    }
  
    const mid = Math.floor((left + right) / 2);
  
    const [leftMin, leftMax] = findMinAndMax(nums, left, mid);
    const [rightMin, rightMax] = findMinAndMax(nums, mid + 1, right);
  
    return [Math.min(leftMin, rightMin), Math.max(leftMax, rightMax)];
  }
  
  const nums = [7, 2, 9, 3, 1, 6, 7, 8, 4];
  const [min, max] = findMinAndMax(nums, 0, nums.length - 1);
  
  console.log("The minimum element in the array is", min);
  console.log("The maximum element in the array is", max);

  // use quicksort and let min o index and max  last index

 