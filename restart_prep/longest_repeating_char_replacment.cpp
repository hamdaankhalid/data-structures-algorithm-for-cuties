class Solution {
public:
	// Find the longest chain with k allowed wildcards
    int characterReplacement(std::string s, int k) {
        std::unordered_map<char, int> charFreq;
        int result = 0;
        int left = 0;
        for (int right = 0; right < s.size(); right++) {
            // maintain a map of characters and their frequency in our window
            charFreq[s[right]]+=1;
            int windowLen = right - left + 1;
            int maxFreqInWindow = 0;
            for (auto pair : charFreq) {
                maxFreqInWindow = std::max(maxFreqInWindow, pair.second);
            }
            // see if there is enough space in our window to use K replacements and continue
            // if there isnt enough space adjust the left pointer to make enough space
            while ((windowLen - maxFreqInWindow) > k) {
                // adjust the left pointer till there is enough space
                charFreq[s[left]]-=1; 
                left++;
    
                // find the new max freq
                maxFreqInWindow = 0;
                for (auto pair : charFreq) {
                    maxFreqInWindow = std::max(maxFreqInWindow, pair.second);
                }
                windowLen = right - left + 1;
            }

            // at this point we are at a window that has enough space
            result = std::max(result, right - left + 1);
        }

        return result;
    }
};
