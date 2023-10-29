struct Args {
	int idx;
	int accumulated;
};
int FIRSTTIMER = -6969069;
class Solution {
public:
    int maxProduct(std::vector<int>& nums) {
		int maxResult = FIRSTTIMER;
		Args initArgs = {0, 1};
		std::vector<Args> stack;
		stack.push_back(initArgs);
		while (!stack.empty()) {
			Args top = stack.back();
			stack.pop_back();
			if (maxResult == FIRSTTIMER) {
				maxResult = nums[top.idx];
				Args nextArgs = { top.idx+1, nums[top.idx] };
				stack.push_back(nextArgs);
			} else {
				if (top.idx == nums.size()) {
					maxResult = std::max(maxResult, top.accumulated);
					continue;
				}
				
				maxResult = std::max(maxResult, std::max(top.accumulated*nums[top.idx], top.accumulated));
				
				Args nextArgsNewSubArr = { top.idx+1, nums[top.idx] };
				Args nextArgsContinueBuilding = { top.idx+1, top.accumulated * nums[top.idx] };
				stack.push_back(nextArgsNewSubArr);
				stack.push_back(nextArgsContinueBuilding);
			}
		}
		return maxResult;
    }
};
