public class Solution {
    public int[] SearchRange(int[] nums, int target)
    {
        // find the first index, the same one must be right next to it
        int l = 0;
        int r = nums.Length - 1;

        int idx = -1;
        while (l <= r)
        {
            int m = (l + r)/2;
            if (target == nums[m]) {
                idx = m;
                break;
            }
            else if (nums[m] > target)
                r = m - 1;
            else
                l = m + 1;
        } 

        if (idx == -1)
            return new int[] { -1, -1 };

        // left most idx
        int leftMost = idx;
        while (leftMost > 0 && nums[leftMost - 1] == target)
            leftMost--;

        int rightMost = idx;
        while (rightMost < nums.Length - 1 && nums[rightMost + 1] == target)
            rightMost++;

        return new int[] { leftMost, rightMost };
    }
}