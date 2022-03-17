function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currsubsum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      currsubsum = Math.max(nums[i], currsubsum+nums[i]);
      maxSum = Math.max(maxSum, currsubsum);
  }
  return maxSum;  
};
