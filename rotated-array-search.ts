/*
1- take the middle and compare with target, if matches return.
2- if middle is bigger than left side, it means left is sorted
2a- if [left] < target < [middle] then do recursion with left, middle - 1 (right)
2b- left side is sorted, but target not in here, search on right side middle + 1 (left), right
3- if middle is less than right side, it means right is sorted
3a- if [middle] < target < [right] then do recursion with middle + 1 (left), right
3b- right side is sorted, but target not in here, search on left side left, middle -1 (right)
*/

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      
      const midPoint = left + Math.floor((right - left)/2);
      //console.log(midPoint, left, right);

      if (nums[midPoint] === target) {
          return midPoint;
      }
      
      if(nums[left] <= nums[midPoint]) {
          // left is sorted
          if ( (nums[left] <= target) && (target <= nums[midPoint]) ) {
              right = midPoint - 1;
          } else {
              left = midPoint + 1;
          }
      } else {
          // right is sorted
          if ( (nums[midPoint] <= target) && (target <= nums[right]) ) {
              left = midPoint + 1;
          } else {
              right = midPoint - 1;
          }
      }
  }
  
  return -1;
};
