public class IsSubsequence {
  class Solution {
    public boolean isSubsequence(String s, String t) {  
        StringBuilder shorterStringBuilder = new StringBuilder(s);
        for (int i = 0; i < t.length(); i ++) {
            if (shorterStringBuilder.toString() == "") {
                return true;
            }
            if (shorterStringBuilder.charAt(0) == t.charAt(i)) {
               shorterStringBuilder.deleteCharAt(0);
            }
        }
        if (shorterStringBuilder.toString() == "") {
            return true;
        }
        return false;
    }
  }
}
