function twoSum(nums: number[], target: number): number[] {
  const mem = {};
  
  const output = [];
  for(let idx = 0; idx < nums.length; idx++) {
      
      if ( nums[idx] in mem ) {
          output.push(mem[nums[idx]], idx)
      } else {
          mem[target - nums[idx]] = idx;
      }
      
  }
  return output;
};
