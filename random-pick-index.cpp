/**
 * Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the array nums.
int pick(int target) Picks a random index i from nums where nums[i] == target. If there are multiple valid i's, then each index should have an equal probability of returning.

 * 
 * */
class Solution {
    // mapping of each unique vector to the indices it appears in
    std::map<int, std::vector<int>> inner;
    
    public:
    
    Solution(const vector<int>& nums) {
        for (int i = 0; i < nums.size(); i++) {
            inner[nums.at(i)].push_back(i);
        }
    }
    
    int pick(int target) {
        std::vector<int> indexes = inner[target];
        // given the range 0, end of indexes
        int indexesize = indexes.size();
        // pick random num
        int randomnum = rand() % indexesize;
        return indexes.at(randomnum);
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(nums);
 * int param_1 = obj->pick(target);
 */