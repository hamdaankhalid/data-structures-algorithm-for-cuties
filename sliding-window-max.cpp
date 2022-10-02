#include<vector>
#include<deque>

class Solution {
public:
	std::vector<int> maxSlidingWindow(std::vector<int>& nums, int k) {
		int numSize = nums.size();
        std::vector<int> result;
        std::deque<int> indexesOfMaxes; // max stored in front
        
        for (int i = 0; i < numSize; ++i) {
            // remove all the indices in the front that are not in our range
            while (!indexesOfMaxes.empty() && indexesOfMaxes.front() <= i - k) {
                indexesOfMaxes.pop_front(); 
            }
            // starting from the back remove all the indices who's 
            // associated num in nums is lesser than our current number
            while (!indexesOfMaxes.empty() && nums[i] > nums[indexesOfMaxes.back()]) {
                indexesOfMaxes.pop_back();
            }
            indexesOfMaxes.push_back(i);
            if (i >= k - 1) {
                result.push_back( nums[indexesOfMaxes.front()] );
            }
        }
        
        return result;
	}
};


