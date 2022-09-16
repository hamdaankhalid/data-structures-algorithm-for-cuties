class Solution {
public:
    int minMoves(vector<int>& nums) {
        
        int n = nums.size();
        
        int minimum_element = INT_MAX;
        for (int i = 0; i < nums.size(); i++) {
            minimum_element = min(minimum_element, nums[i]);
        }
        
        int answer = 0;
        
        for(int i=n-1; i>=0; i--)
        {
            answer += (nums[i] - minimum_element);
        }
        
        return answer;
    }
};