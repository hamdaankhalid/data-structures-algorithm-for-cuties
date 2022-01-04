/**
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

function search(nums: number[], target: number): number {
    if(!nums){
        return -1
    }
    
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        
        if(nums[mid] === target){
            return mid
        }
        
        // left sorted scenario
        if(nums[left] <= nums[mid]){
     
            if((target<nums[left]) || (target>nums[mid])){
                left = mid + 1;
            }else{

                right = mid - 1;
            }
            
        }else{
        // right sorted scenario
            if((target>nums[right]) || (target<nums[mid])){
                // target lies on the left
                right = mid - 1;
            }else{
                // target lies on the right
                left = mid + 1;
            }
        }
        
    }
    
    return -1;
};
