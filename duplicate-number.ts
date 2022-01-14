/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/

function findDuplicate(nums: number[]): number {
    const seenBefore = new Set();
    for(let i = 0; i < nums.length; i++){
        if(seenBefore.has(nums[i])){
            return nums[i];
        }
        seenBefore.add(nums[i]);
    }
};
