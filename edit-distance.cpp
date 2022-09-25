class Solution {
public:
    int minDistance(string word1, string word2) {
        map<string, int> memo;
        return minDistanceMemo(word1, word2, memo);
    }
    
    int minDistanceMemo(string word1, string word2, map<string, int>& memo) {
        // std::cout << word1 << ", " << word2 << "\n";
        
        if (word1.size() == 0 && word2.size() != 0)
            return word2.size();
        
        if (word1.size() != 0.&& word2.size() == 0)
            return word1.size();
        
        if (word1.size() == 0 && word2.size() == 0) {
            return 0;
        }
        
        if (memo.find(word1 + "_" + word2) != memo.end()) {
            return memo.at(word1 + "_" + word2);
        }
        
        if (word1[0] == word2[0]) {
            return minDistanceMemo(
                word1.substr(1),
                word2.substr(1),
                memo
            );
        }
        
        int insertScenario = 1 + minDistanceMemo(word1, word2.substr(1), memo);
        int deleteScenario = 1 + minDistanceMemo(word1.substr(1), word2, memo);
        int replaceScenario = 1 + minDistanceMemo(word1.substr(1), word2.substr(1), memo);
        
        memo[word1 + "_" + word2] = min(insertScenario, min(deleteScenario, replaceScenario));
        return memo[word1 + "_" + word2]; 
    }
};
