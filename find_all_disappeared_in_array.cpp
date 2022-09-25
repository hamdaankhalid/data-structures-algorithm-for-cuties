class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        set<int> numsAsSet(nums.begin(), nums.end());
        set<int> allNums;
        for (int i = 1; i < nums.size()+1; i++) {
            allNums.insert(i);
        }
        vector<int> disappeared;
        std::set_difference(allNums.begin(), allNums.end(), numsAsSet.begin(), numsAsSet.end(), back_inserter(disappeared));
        
        return disappeared;
    }
};
