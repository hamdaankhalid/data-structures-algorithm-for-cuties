/*
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
*/

class Solution {
    
    private initialConfig: number[];
    private nums: number[];

    constructor(nums: number[]) {
        // console.log(nums)
        this.nums = nums;
        this.initialConfig = [...nums];
    }

    reset(): number[] {
        //this.nums = this.initialConfig;
        return this.initialConfig;
    }

    shuffle(): number[] {
        for(let i = 0; i < this.nums.length; i++){
            const swapIndex = this.switchWith();
            const temp = this.nums[i];
            this.nums[i] = this.nums[swapIndex];
            this.nums[swapIndex] = temp;
        }
        return this.nums
    }

    private switchWith(): number {
        return Math.floor(Math.random() * this.nums.length);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */