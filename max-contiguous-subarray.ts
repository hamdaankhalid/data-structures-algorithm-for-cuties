/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/
// DP TABLE MOTHERFUCLERS
function maxSubArray(nums: number[]): number {
    const maxes = [nums[0]];
    let runningMaxSumTill = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const potential = runningMaxSumTill+nums[i]
        if ( potential < nums[i] ) {
            runningMaxSumTill = nums[i];
        } else {
            runningMaxSumTill = potential;
        }
        maxSum = runningMaxSumTill < maxSum ? maxSum : runningMaxSumTill;
        
    }
    
    return maxSum;
};
