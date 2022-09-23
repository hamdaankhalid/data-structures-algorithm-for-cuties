class Solution {
    
    
    int minFrom(int step, const vector<int>& nums, vector<int>& memo) {
        if (step >= nums.size()) {
            return 0; // 0 steps from here
        }

        if (memo[step] != -1) {
            return 1+memo[step];
        }

        int minStepsFromHere = INT_MAX-1;
        int maxStepsFromStep = nums[step - 1];
        
        for (int i = 1; i <= maxStepsFromStep; i++) {
            minStepsFromHere = min(
                minStepsFromHere,
                minFrom(step + i, nums, memo));
        }
        
        memo[step] = minStepsFromHere;
        return 1+memo[step];
    }
    
public:
    int jump(vector<int>& nums) {
        vector<int> memo(nums.size(),-1);
        return minFrom(1, nums, memo);
    }
};