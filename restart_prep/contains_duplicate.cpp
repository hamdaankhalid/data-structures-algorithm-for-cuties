#include <vector>
#include <unordered_set>

class Solution {
public:
    bool containsDuplicate(std::vector<int>& nums) {
		std::unordered_set<int> seenBefore;
		for (int i = 0; i < nums.size(); i++) {
			if (seenBefore.find(nums[i]) != seenBefore.end())
				return true;
			seenBefore.insert(nums[i]);
		}
		return false;
    }
};
