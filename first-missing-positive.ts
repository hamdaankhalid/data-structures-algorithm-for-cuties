/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.
*/

// nlogn + n
function firstMissingPositive(nums: number[]): number {
    nums.sort(function(a, b) {
      return a - b;
    });
    let seenBefore = new Set();
    
    let firstPos = 1;
    
    for (let i=0; i<nums.length; i++) {
        
        let num = nums[i];
        if(num>0 && !seenBefore.has(num)){
            if(num!=firstPos){
            return firstPos
            }
            seenBefore.add(num)
            firstPos++
        }
        
    }
    return firstPos;
};
