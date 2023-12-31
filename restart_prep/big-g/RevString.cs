// Length 10
// 0..9 => 10 - 0 - 1
// 1..8 => 10 - 1 - 1
// 2..7 => 10 - 2 - 3
// 3..6 => 10 - 3 - 1
// 4..5 => 10 - 4 - 1
// 5 
public class Solution {
    public void ReverseString(char[] s) {
        for (int i = 0; i < (s.Length)/2; i++)
        {
            int anti = s.Length - i - 1;
            char tmp = s[i];
            s[i] = s[anti];
            s[anti] = tmp;
        }
    }
}
