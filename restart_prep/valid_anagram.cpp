#include <string>
#include <unordered_map>
/*
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

class Solution {
public:
    bool isAnagram(std::string s, std::string t) {
		std::unordered_map<char, int> sDecomposed;
		for (char c : s) {
			sDecomposed[c] += 1;
		}

		for (char x	: t) {
			if (sDecomposed.find(x) == sDecomposed.end())
				return false;
			if (sDecomposed.at(x) == 0)
				return false;
			sDecomposed[x] -= 1;
			if (sDecomposed[x] == 0)
				sDecomposed.erase(x);
		}

		return sDecomposed.size() == 0;
    }
};
