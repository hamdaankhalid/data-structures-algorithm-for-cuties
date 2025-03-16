public class Solution {

    private readonly Random _rand = new Random();

    private readonly Dictionary<int, List<int>> _numToIndices;

    public Solution(int[] nums) {
       _numToIndices = new Dictionary<int, List<int>>();
       for (int i = 0; i < nums.Length; i++) 
       {
            int num = nums[i];
            if (!_numToIndices.ContainsKey(num))
                _numToIndices[num] = new List<int>();

            _numToIndices[num].Add(i);
       }
    }
    
    public int Pick(int target) {
        List<int> indices = _numToIndices[target];
        return indices[_rand.Next(0, indices.Count)];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int param_1 = obj.Pick(target);
 */