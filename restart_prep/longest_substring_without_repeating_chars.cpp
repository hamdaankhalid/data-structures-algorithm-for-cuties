#include <iostream>
#include <string>
#include <unordered_set>

class Solution {
public:
	// keep expanding right till we hit a situation where we need to shrink from left
    int lengthOfLongestSubstring(std::string s) {
		int longest;
		int left = 0;
		std::unordered_set<char> curr_chars;
		for (int right = 0; right < s.size(); right++) {
			char curr_char = s[right];
			while (curr_chars.find(curr_char) != curr_chars.end()) {
				curr_chars.erase(s[left]);
				left++;
			}
			curr_chars.insert(curr_char);
			longest = std::max(right - left + 1, longest);
		}
		return longest;
    }
};

int main() {
	Solution s;
	std::string t1 = "abcabcbb";
	std::string t2 = "bbbbb";
	std::string t3 = "pwwkew";

	std::cout << s.lengthOfLongestSubstring(t1) << " Should be 3" << std::endl;
	std::cout << s.lengthOfLongestSubstring(t2) << " Should be 1" << std::endl;
	std::cout << s.lengthOfLongestSubstring(t3) << " Should be 3" << std::endl;
}
