class Solution {
public:
    int strStr(string haystack, string needle) {
        int needle_size = needle.size();
        for (int i = 0; i < haystack.size(); i++) {
            string inner_string = haystack.substr(i, needle_size);
            
            if (inner_string == needle) {
                return i;
            }
        }
        return -1;
    }
};
