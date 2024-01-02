/*
go left to right
see if we find an instance where it closes and then opens
then 
*/
public class Solution {
    public string RemoveOuterParentheses(string s) {
        // split it into top level groups?
        List<List<char>> res = new List<List<char>>();
        List<char> curr = new List<char>();
        int counter = 0;
        for (int i = 0; i < s.Length; i++) {
            if (s[i] == ')') {
               counter--; 
            } else {
                counter++; 
            }
            
            curr.Add(s[i]);
            if (counter == 0) {
                res.Add(curr);
                curr = new List<char>();
            } 
        }
        
        if (curr.Count > 0) {
            res.Add(curr);
        }
        
        StringBuilder strb = new StringBuilder();
        foreach (List<char> inner in res) {
            inner.RemoveAt(0);
            inner.RemoveAt(inner.Count - 1);
            string innerStr = string.Join("", inner);
            strb = strb.Append(innerStr);
            // Console.WriteLine(innerStr);
        }
        
        return strb.ToString();
    }
}
