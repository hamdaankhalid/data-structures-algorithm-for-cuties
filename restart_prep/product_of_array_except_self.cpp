#include <vector>

using namespace std;

/*
 * Example 1:

Input: nums = [1,2,3,4]
1, 1, 2, 6
24,12,4,1

Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
		// 2 pass solution
		std::vector<int> toMyLeft(nums.size());
		toMyLeft[0] = 1;
		for (int i = 1;i < nums.size(); i++) {
			toMyLeft[i] = nums[i-1] * toMyLeft[i-1];
		}

		std::vector<int> toMyRight(nums.size());
		toMyRight[toMyRight.size()-1] = 1;
		for (int i = nums.size() - 2; i > -1; i--) {
			toMyRight[i] = nums[i+1] * toMyRight[i+1];
		}

		std::vector<int> result(nums.size());
		for (int i = 0; i < nums.size(); i++)
			result[i] = toMyLeft[i] * toMyRight[i];

		return result;
    }
};
