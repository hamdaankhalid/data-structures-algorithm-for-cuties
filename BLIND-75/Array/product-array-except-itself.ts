/**
* [1,2,3,4]
* prefxi =   1  1 2 6
* postfix = 24 12 4  1
**/

function productExceptSelf(nums: number[]): number[] {
  const prefixing = [1];
  let prefix = 1;
  for(let i=1; i < nums.length; i++) {
      prefix = nums[i-1]*prefix;
      prefixing.push(prefix);
  }
  
  console.log(prefixing);
  
  const postFixing = [1];
  let postFix = 1;
  for(let i = nums.length - 2; i > -1; i--) {
      postFix = postFix*nums[i+1];
      postFixing.unshift(postFix)
  }
  
  for (let i = 0; i < nums.length; i++) {
      prefixing[i] *= postFixing[i];
  }
  return prefixing;
};
