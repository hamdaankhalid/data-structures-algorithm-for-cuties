function twoSum(nums: number[], target: number): number[] {
  const seenBefore = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
      if (seenBefore.has(nums[i])) {
          return [i, seenBefore.get(nums[i])];
      }
      seenBefore.set(target-nums[i], i);
  }
  
  return [-1, -1];
}
