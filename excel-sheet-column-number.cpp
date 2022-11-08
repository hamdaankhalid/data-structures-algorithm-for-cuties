class Solution {
public:
    /**
    * A -> 1
    * AA -> (26 * 1) + 1
    * BAC -> (26*26*2) + (26 * 1) + 3
    * */
    int titleToNumber(string columnTitle) {
        int res = 0;
        for (int offset = columnTitle.size() - 1; offset > -1; offset--) {
            char charFromFirst = columnTitle[columnTitle.size() - 1 - offset];
            int charVal = find(charToValIdx.begin(), charToValIdx.end(), charFromFirst) - charToValIdx.begin() + 1;
            res += (pow(26, offset) * charVal);
        }
        return res;
    }
private:
    const std::vector<char> charToValIdx = {
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    };
};
