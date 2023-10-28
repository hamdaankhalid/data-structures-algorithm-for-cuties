#include <cstddef>
#include <vector>
#include <unordered_map>

class Solution {
public:
	std::vector<int> twoSum(std::vector<int>& nums, int target) {
		std::vector<int> res;
        std::unordered_map<int, int> seenBefore;
        for (int i = 0; i < nums.size(); i++) {
            int curr = nums[i];
			int check = target - curr;
			std::unordered_map<int, int>::iterator seenBeforeIterator = seenBefore.find(check);
			if (seenBeforeIterator != seenBefore.end()) {
				res.push_back(seenBeforeIterator->second);
				res.push_back(i);
				return res;
			}
			seenBefore.insert(std::make_pair(curr, i));
        }
		return res;
    }
};
