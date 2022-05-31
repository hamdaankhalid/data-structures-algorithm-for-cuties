/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
  // values at odd indices should be greater than one before
  // values at even indices should be less than one before
  // traverse with this set of rules and wherever there's a violation just swap
  for (let i = 1; i < nums.length; i++) {
      if (i % 2 === 0) {
          if (nums[i] > nums[i-1]) {
              swap(nums, i, i-1);
          }
      } else {
          if (nums[i] < nums[i-1]) {
              swap(nums, i, i-1);
          }
      }
  }
};

/**
* Swap i and j index vals in nums in place
*/
function swap(nums: number[], i: number, j: number): void {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
