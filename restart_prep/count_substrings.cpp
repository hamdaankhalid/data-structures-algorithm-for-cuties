bool isPal(std::string& check);

class Solution {
public:
  int countSubstrings(string s) {
    int numPals = 0;
    for (int leftIdx = 0; leftIdx < s.size(); leftIdx++) {
      for (int rightIdx = leftIdx; rightIdx < s.size(); rightIdx++) {
        std::string substring = s.substr(leftIdx, rightIdx - leftIdx + 1);
        numPals += isPal(substring); 
      }
    }
    return numPals;
  }
};

bool isPal(std::string& check) {
  int midWay = check.size()/2;

  for (int l = 0; l < midWay; l++) {
    if (check[l] != check[check.size() - 1 - l]) {
      return false;
    }
  }
  return true;
}
