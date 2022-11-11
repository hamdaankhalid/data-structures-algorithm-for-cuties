class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s.size() == 0) {
            return true;
        }

        int candidateIdx = 0;
        for (auto c : t) {
            if (candidateIdx < s.size() && s[candidateIdx] == c) {
                candidateIdx++;
            }

            if (candidateIdx == s.size()) {
                return true;
            } 
        }

        return false;
    }
};
