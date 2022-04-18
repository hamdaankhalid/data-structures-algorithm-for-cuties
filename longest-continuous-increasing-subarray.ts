function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 1) {
      return 1;
  }
  
  let longestIncreasing = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
      let j = i+1;
      while (nums[j-1] < nums[j]) {
          j++;
      }
      
      longestIncreasing = Math.max(j-i, longestIncreasing);
  }
  
  return longestIncreasing;
};
