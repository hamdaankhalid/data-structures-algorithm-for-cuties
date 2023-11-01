class Solution {
public:
    int findMin(std::vector<int>& nums) {
		int left = 0;
		int right = nums.size() - 1;
		
		while (left < right) {
			int mid = left + (right - left)/2;
	
			if (nums[mid] > nums[right]) {
                // If mid > right, the pivot must be in the right half
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                // If mid < right, the pivot must be in the left half or mid itself
                right = mid;
            } else {
                // If nums[mid] == nums[right], we can safely move right pointer leftward
                right--;
            }
		}

		return nums[left];
    }

};
