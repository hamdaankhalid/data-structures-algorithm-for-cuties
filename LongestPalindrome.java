class LongestPalindrome {
  public int longestPalindrome(String s) {
      int pairs = 0;
      Set<Character> unpairedChars = new HashSet<>();
      
      for (int i = 0; i < s.length(); i++) {
          char alphabet = s.charAt(i);
          
          if (unpairedChars.contains(alphabet)) {
              pairs+=1;
              unpairedChars.remove(alphabet);
          } else {
              unpairedChars.add(alphabet);
          }
      }
      
      if (unpairedChars.size() > 0) {
          return (pairs*2)+1;
      } else {
          return pairs*2;
      }
  }
}