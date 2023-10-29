#include <vector>
#include <iostream>

/*
 *There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4


 * */

/*
 * pick the middle
 * look to it's left and to it's right
 * first we need to figure if one side is sorted.
 * if the left side is sorted such that current item is bigger than the item 
 * to its left and the target can be placed in that range then we can scope our
 * search down, otherwise we should look to our right
 * */

class Solution {
public:
    int search(std::vector<int>& nums, int target) {
		int left = 0;
		int right = nums.size()-1;

		while (left <= right) {
			int middleIdx = (right + left)/2;
			int middleVal = nums[middleIdx];
			
			if (middleVal == target) {
				return middleIdx;
			}

			int valAtLeft = nums[left];
			int valAtRight = nums[right];
			
			if (valAtLeft <= middleVal) {
				// left to middle is sorted
				if (target >= valAtLeft && target < middleVal) {
					right = middleIdx - 1;
				} else {
					left = middleIdx + 1;
				}
			} else {
				// left side is not sorted and the rotation point is on the left side
				// right side is sorted
				if (target > middleVal && target <= valAtRight) {
					left = middleIdx + 1;
				} else {
					right = middleIdx - 1;
				}
			}
		}

		return -1;
    }
};
