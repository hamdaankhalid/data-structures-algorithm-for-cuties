class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        // have a queue in which we keep window max's by left to right if any right is greater than left then we just keep removing
        deque<int> q;
        vector<int> result;
        
        
        for (int i = 0; i < nums.size(); i++) {
            while(!q.empty() && i-q.front()>=k)
                q.pop_front(); //only window size of k is allowed
            
            while(!q.empty() && nums[q.back()]<nums[i])
                q.pop_back();
            
            q.push_back(i);
            
            if(i>=k-1)
                result.push_back(nums[q.front()]); //our max value in O(1)
        }
        
        return result;
    }
};
