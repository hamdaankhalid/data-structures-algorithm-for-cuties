function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
      const midPoint = left + Math.floor((right-left)/2);
      
      if (nums[midPoint] > nums[right]) {
          // right most is smaller than midPoint then right is sorted and contains the smallest element
          left = midPoint+1;
      } else if (nums[midPoint] < nums[right]) {
          // right is sorted
          right = midPoint;
      } else {
          right--;
      }
  }
  
  return nums[left];
}
