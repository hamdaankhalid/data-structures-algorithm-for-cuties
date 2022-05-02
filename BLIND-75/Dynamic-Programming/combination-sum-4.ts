function combinationSum4(nums: number[], target: number): number {
  const memo = {};
  return recur(nums, target, 0, memo);
};

function recur(nums: number[], target: number, runningSum: number, memo: Object) {
  if(runningSum in memo) {
      return memo[runningSum];
  }
  
  if (runningSum === target) {
      return 1; 
  }
  
  if (runningSum > target) {
      return 0;
  }
  
  let count = 0;
  for (let i of nums) {
      count += recur(nums, target, runningSum+i, memo);
  }
  memo[runningSum] = count;
  return count;
}
