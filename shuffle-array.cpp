#include <vector>
#include <cstdlib>

class Solution {
public:
    Solution(std::vector<int>& _nums): og(_nums), nums(_nums) {}
    
    std::vector<int> reset() {
      nums = og;
      return nums;
    }
    
    std::vector<int> shuffle() {
      for (int i = 0; i < nums.size(); i++) {
        int randIdx = rand() % nums.size();
        int temp = nums.at(randIdx);
        nums[randIdx] = nums.at(i);
        nums[i] = temp;
      }
    
      return nums;
    }
private:
  const std::vector<int> og;
  std::vector<int> nums;
};
