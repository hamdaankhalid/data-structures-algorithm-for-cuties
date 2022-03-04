function productExceptSelf(nums: number[]): number[] {
  const leftToRight = [...nums];
  leftToRight[0] = 1;

  // left to right array
  for(let i = 1; i < nums.length; i++) {
     leftToRight[i] = nums[i-1] * leftToRight[i-1]; 
  }
      
  const rightToLeft = [...nums];
  rightToLeft[nums.length-1] = 1;

  for(let i = nums.length - 2 ; i >= 0 ; i--) {
     rightToLeft[i] = nums[i+1] * rightToLeft[i+1];
  }

  // result
  const result = [];
  for(let i = 0; i < nums.length; i++) {
     result.push(rightToLeft[i]*leftToRight[i]);
  }
  
  return result;
};
