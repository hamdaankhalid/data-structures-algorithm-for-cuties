function intersect(nums1: number[], nums2: number[]): number[] {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
      const currentNum = nums1[i];
      const position = getPosition(nums2, currentNum);
      if (position === -1) {
          continue; 
      }
      nums2.splice(position, 1);
      result.push(nums1[i]);
  }
  return result;
};

function getPosition(nums: number[], searchFor: number): number {
  for (let i = 0; i < nums.length; i++) {
      if(nums[i] === searchFor){
          return i;
      }
  }
  return -1;
}
