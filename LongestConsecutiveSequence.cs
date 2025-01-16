public class Solution {
    public int LongestConsecutive(int[] nums)
    {
        // add everything to hashset then walk the streaks keepign track of longes walk
        HashSet<int> cuteSet = new HashSet<int>();
        foreach (int item in nums)
            cuteSet.Add(item);

        int longest = 0;
        foreach (int item in nums)
        {
            // walk in over direction checking the longest streak
            // this ! check is basicalyl making sure the item is the start of a streak
            if (!cuteSet.Contains(item - 1))
            {
                int m = item + 1;
                while (cuteSet.Contains(m))
                    m++;
                longest = Math.Max(m - item, longest);
            }
        }

        return longest;
    }
}