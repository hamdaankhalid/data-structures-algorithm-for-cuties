function maxSubArray(nums: number[]): number {
  let currSum = 0;
  let bestSum = -Infinity;
  
  for (let num of nums) {
      currSum = currSum+num > num ? currSum+num : num;
      bestSum = bestSum > currSum ? bestSum : currSum;
  }
  
  return bestSum;
}
