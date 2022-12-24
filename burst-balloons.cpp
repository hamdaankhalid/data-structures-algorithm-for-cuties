#include <vector>

/**
You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.

 

Example 1:

Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
Example 2:

Input: nums = [1,5]
Output: 10


Left tracks burst
Right tracks not burst

                                                                        3 1 5 8 , 0, 0
                                  1 5 8, 0, 3                                                               3 1 5 8, 1, 0
              5 8, 0, 8                               1 5 8, 1, 3                                 1 5 8, 0, 3       3 5 8, 1,  
    8, 0, 48            5 8, 1, 8             
    _, 0, 56            5, 0, 16
                        _, 0, 21
 * */
class Solution {
public:

    int maxCoins(std::vector<int>& nums) {
      return allPossibilities(nums, 0, 0);
    }

private:
  // pass around the vector by value so each recursive function can manipulate it
  int allPossibilities(std::vector<int> nums, int burstIdx, int runningScore) { 

    if (nums.size() == 0) {
      return runningScore;
    }

    int maxres = -1;
    // scenario: skip bursting the first balloon, this can only happen if there are more than 1 elements in the nums vector
    if (nums.size() > 1 && burstIdx < nums.size() - 1) {
      int skipres = allPossibilities(nums, burstIdx+1, runningScore);
      maxres = std::max(maxres, skipres);
    }

    // scenario: burst the first available balloon
    int burstReward = reward(nums, burstIdx);
    nums.erase(nums.begin() + burstIdx);
    int newBurstIdx = 0;
    if (burstIdx > 0) {
      newBurstIdx = burstIdx - 1;
    }
    int burstres = allPossibilities(nums, newBurstIdx, runningScore + burstReward);
    
    maxres = std::max(maxres, burstres);

    return maxres;
  }

  int reward(const std::vector<int>& nums, int idx) {
    int reward = nums.at(idx);
    if (idx < nums.size() - 1) {
      reward *= nums.at(idx+1);
    }
    if (idx > 0) {
      reward *= nums.at(idx-1);
    }
    return reward;
  }
};
