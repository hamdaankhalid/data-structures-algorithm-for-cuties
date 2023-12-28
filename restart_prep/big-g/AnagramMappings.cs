public class Solution {
    public int[] AnagramMappings(int[] nums1, int[] nums2) {
        int[] res = new int[nums1.Length];
        
        Dictionary<int, int> num2LookupHelper = new Dictionary<int, int>();
        for (int i = 0; i < nums2.Length; i++) {
            num2LookupHelper[nums2[i]] = i;
        }
        
        for (int j = 0; j < nums1.Length; j++)
        {
            res[j] = num2LookupHelper[nums1[j]];
        }
        
        return res;
    }
}
