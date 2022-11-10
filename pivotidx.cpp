class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int pivotIdx = -1;
        int rightSum = totalSum(nums);
        int leftSum = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i != 0)
                leftSum += nums[i-1];
            rightSum -= nums[i];
            if (leftSum == rightSum) {
                pivotIdx = i;
                break;
            }
        }

        return pivotIdx;
    }
private:
    int totalSum(vector<int>& nums) {
        int sum = 0;
        for (auto num: nums) {
            sum += num;
        }
        return sum;
    }
};
