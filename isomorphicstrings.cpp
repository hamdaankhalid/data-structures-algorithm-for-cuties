class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.size() != t.size())
            return false;
        
        std::unordered_map<char, char> isoMap;
        std::unordered_map<char, char> inverseIsoMap;
        for (int i = 0; i < s.size(); i++) {
            char fromS = s.at(i);
            char fromT = t.at(i);

            if (
            (isoMap.find(fromS) != isoMap.end() && 
                isoMap.at(fromS) != fromT) ||
                (inverseIsoMap.find(fromT) != inverseIsoMap.end() &&
                inverseIsoMap.at(fromT) != fromS)
                ) {
                return false;
            }

            if (isoMap.find(fromS) == isoMap.end() && inverseIsoMap.find(fromT) == inverseIsoMap.end()) {
                isoMap[fromS] = fromT;
                inverseIsoMap[fromT] = fromS;
            }
        }
        return true;
    }
};
