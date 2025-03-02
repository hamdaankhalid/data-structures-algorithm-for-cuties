public class Solution {
    public bool CanBeEqual(int[] target, int[] arr) {
        if (target.Length != arr.Length)
            return false;

        Dictionary<int, int> freqs = new();
        foreach (int num in target) 
        {
            if (!freqs.ContainsKey(num))
                freqs[num] = 0;
            freqs[num]++;
        }
        
        foreach (int num2 in arr)
        {
            if (!freqs.ContainsKey(num2)) 
                return false;
            freqs[num2]--;
            if (freqs[num2] < 0)
                return false;
        }

        foreach (var kv in freqs)
        {
            if (kv.Value != 0)    
                return false;
        }

        return true;
    }
}