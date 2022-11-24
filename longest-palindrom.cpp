class Solution {
public:
    int longestPalindrome(string s) {
        std::unordered_map<char, int> charCounts;
        for (auto c : s) {
            if (charCounts.find(c) == charCounts.end()) {
                charCounts[c] = 1;
            } else {
                charCounts[c]+=1;
            }
        }

        // now imagine get sum of all even count chars in charCounts
        // also get highest count odd in charCounts
        int plaindromLen = 0;
        bool addPalindromeAsIs = true;
        for (auto item: charCounts) {
            if (item.second % 2 == 0) {
                plaindromLen += item.second;
            } else {
                if (addPalindromeAsIs) {
                    plaindromLen += item.second;
                    addPalindromeAsIs = false;
                } else {
                    int onlyTheEvenPartOfOdd = item.second - 1;
                    plaindromLen += onlyTheEvenPartOfOdd;
                }
            }
        }

        return plaindromLen;
    }
};
