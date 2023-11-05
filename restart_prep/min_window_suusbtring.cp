class Solution {
public:
    string minWindow(string s, string t) {

      if (s.size() == 0 || t.size() == 0 || s.size() < t.size())
        return "";
      
      if (s.size() == 1 && t.size() == 1) {
       return s == t ? s : "";
      }

      std::unordered_map<char, int> checker;
      for (char _t : t) {
        checker[_t] += 1;
      }

      // intial best pair is of big len so any legit substring is better
      std::pair<int, string> best = std::make_pair(100000, "");

      std::unordered_map<char, int> windowFreq;

      int left = 0;
      for (int right  = 0; right < s.size(); right++) {
        // expand right till window covers everything in t
        windowFreq[s[right]]+=1;

        // move left forward till we are at the min interval where
        // we have all of t's chars in window
        while (left <= right && allFound(windowFreq, checker, t)) {
          int windowLen = right - left + 1;
          if (best.first > windowLen) {
            best.first = windowLen;
            best.second = s.substr(left, windowLen);
          }

          // collapse window from the left side
          windowFreq[s[left]] -= 1;
          left++;
        }

      }

      return best.second;
    }

private:
  bool allFound(std::unordered_map<char, int>& curr, std::unordered_map<char,int>& ideal, std::string t) {  
    for (char _t : t) {
      if (curr[_t] < ideal[_t]) {
        return false;
      }
    }
    return true;
  }
};
