class Solution {
    public int findPeakElement(int[] nums) {
        return binarySearch(nums, 0, nums.length -1);
    }
    
    private int binarySearch(int[] nums, int left, int right) {
        if (left == right) {
            return left;
        }
        
        int midPoint = left + (right - left)/2;
        // which side does the slope lie?
        if (nums[midPoint] > nums[midPoint+1]) {
            // slope lies on left side so move the right
            return binarySearch(nums, left, midPoint);
        } else {
            // slope lies on right side so move the left
            // since the converging is such that we will. be returnign left
            // we move left pointer t0 midPoint+1 but in the above block we move right only by midPoint
            return binarySearch(nums, midPoint+1, right);
        }
    }
}