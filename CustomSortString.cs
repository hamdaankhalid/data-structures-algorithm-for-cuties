public class Solution {
    public string CustomSortString(string order, string s) {
        int[] map = new int[26];
        for (int i = 0; i < order.Length; i++)
            map[(int)(order[i] - 'a')] = i+1;
        
        char[] res = s.ToArray();

        Array.Sort(res, (x,y) =>{
            int xi = (int)(x - 'a');
            int yi = (int)(y - 'a');
            return map[xi].CompareTo(map[yi]);
        });

        return string.Join("", res);
    }
}