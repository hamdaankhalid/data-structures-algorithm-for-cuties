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

function twoSumAgain(nums: number[], target: number): number[] {
    const map = {};
    
    for (let i = 0; i< nums.length;i++) {
        const curr = nums[i]
        const toSearch = target - curr;
        
        if ( toSearch in map ) {
            return [i, map[toSearch]]
        }
        
        map[curr] = i;
        
    }

    return [-1, -1]
};
