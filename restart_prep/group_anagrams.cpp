#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector<vector<string> > groupAnagrams(vector<string>& strs) {
		std::unordered_map<std::string, std::vector<std::string>> stage;
		for (std::string word : strs) {
			std::string wordCopy = word;
			std::sort(wordCopy.begin(), wordCopy.end());
			stage[wordCopy].push_back(word);
		}
		
		std::vector<std::vector<std::string>> res;
		for (auto& stuff : stage) {
			res.push_back(stuff.second);
		}
		return res;
    }
};
