/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const numsCount = count(nums);
  
  for (let i = 0; i < numsCount; i++) {
      earliest(nums);
      nums.push(0);
  }

};

const earliest = (array: number[]) => {
  for(let i = 0; i < array.length; i++){
      if(array[i]===0){
          array.splice(i,1);
          return i;
      }
  }
};

const count = (nums) => {
  let c = 0;
  for(let j of nums) {
      if (j === 0){
          c++
      }
  }
  return c;
}
