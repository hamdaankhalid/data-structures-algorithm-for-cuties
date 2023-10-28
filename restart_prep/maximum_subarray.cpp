#include <algorithm>
#include <cmath>
#include <vector>

/*
 *Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.
 * */

/*
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/
class Solution {
public:
    int maxSubArray(std::vector<int>& nums) {
		int maxSumSoFar = -100000000;
		int currSum = 0;
		for (int i = 0; i < nums.size(); i++) {
			currSum += nums[i];
			maxSumSoFar = std::max(std::max(currSum,nums[i]), maxSumSoFar);
			if (currSum < nums[i]) {
				currSum = nums[i];
			}
		}

		return maxSumSoFar;
    }
};
