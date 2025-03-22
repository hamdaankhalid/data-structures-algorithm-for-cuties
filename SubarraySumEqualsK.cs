public class Solution {
    /*
    Iterate over the array tracking the prefix_sum till each point
    at each iteration check if we have seen the compliment against the target
    if we have then the amount of times we have seen the compliment is the amount of times the taret appears
    otherwise add self as the sum
    */
    public int SubarraySum(int[] nums, int k) 
    {
        int count = 0;
        int sumSoFar = 0;
        // seeenBefore and their freqs
        Dictionary<int, int> seenBefore = new Dictionary<int, int>();
        seenBefore[0] = 1;
        foreach (int num in nums)
        {
           sumSoFar += num;

           // now that we know the sum so far we need to check if we have seen the compliment of it
           // if we have seen the compliment then the subarray from the end of the compliment till this current i
           // makes a subarray of sum K
           int checkCompliment = sumSoFar - k;
           if (seenBefore.TryGetValue(checkCompliment, out int complimentFreq))
           {
                count += complimentFreq;
           }

           // Add sum so far in our compliments list
           if (!seenBefore.ContainsKey(sumSoFar))
           {
                seenBefore[sumSoFar] = 1;
           }
           else
           {
                seenBefore[sumSoFar]++;
           }
        }

        return count;
    }
}