public class Solution {

    // Going right to left:
    // find the first monotonic lower value (that is the number we will be swapping to produce next value)
    // if no first monotonic lower is found: return reversed array
    // else:
    // again loop from right to left but this time find the fist element bigger than our chosen value, swap them
    // now for the subarray on the right rearrange the numbers such that it is the lowest number they can be
    public void NextPermutation(int[] nums)
    {
        int valley = -1;
        for (int i = nums.Length - 2; i >= 0; i--)
        {
            int num = nums[i];
            int numAfter = nums[i+1];
            if (num < numAfter)
            {
                valley = i;
                break;
            }
        }

        if (valley == -1)
        {
            Array.Reverse(nums);
            return;
        }

        // now find the guy we need to swap with
        int nextHigher = nums.Length - 1;
        while (nums[nextHigher] <= nums[valley])
            nextHigher--;

        int tmp = nums[valley];
        nums[valley] = nums[nextHigher];
        nums[nextHigher] = tmp;

        Span<int> rightOfWhereWeSwapped = new Span<int>(nums, valley + 1, nums.Length - valley - 1);
        MemoryExtensions.Reverse(rightOfWhereWeSwapped);
    }
}