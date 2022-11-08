class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int threshold = nums.size()/2;
        std::unordered_map<int, int> counts;
        for (auto num : nums) {
            if (counts.find(num) == counts.end()) {
                counts[num] = 0;
            }
            counts[num]++;
            if (counts[num] > threshold) {
                return num;
            }
        }
        return -1;
    }
};
