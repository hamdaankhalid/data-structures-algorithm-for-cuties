public class Solution {
    public int RotatedDigits(int n) {
        Dictionary<int, int> oneEighty = new Dictionary<int, int>();
        oneEighty[0] = 0;
        oneEighty[1] = 1;
        oneEighty[8] = 8;
        oneEighty[2] = 5;
        oneEighty[5] = 2;
        oneEighty[6] = 9;
        oneEighty[9] = 6;
        
        int count = 0;
        
        for (int i = 1; i < n+1; i++) {
            StringBuilder strB = new StringBuilder();
            string tmp = i.ToString();
            bool isValid = true;
            
            foreach (char c in tmp) {
                int asInt = c - '0';
                if (!oneEighty.ContainsKey(asInt)) {
                    isValid = false;
                    break; 
                }
                
                int flipped = oneEighty[asInt];
                strB.Append(flipped.ToString());
            }
            
            if (isValid && strB.ToString() != tmp) {
                count++; 
            }
        }
        
        return count;
    }
}
