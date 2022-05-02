/**
    dp[i] represents the length of the lngest increasing subsequence that ends at i
    so loop from 0 to end called i
    and do an inner loop till i
  
**/

function lengthOfLIS(nums: number[]): number {
  const dp = Array(nums.length).fill(1);
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
          if(nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j]+1);   
          }
      }  
  }
  
  return Math.max(...dp);
};
