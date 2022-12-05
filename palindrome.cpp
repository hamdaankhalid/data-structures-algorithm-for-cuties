#include <vector>
#include <deque>
#include <ctype.h>
#include <string>


class Solution {
public:
    bool isPalindrome(std::string s) {
        std::deque<char> rev;
        std::vector<char> og;
        for (auto c : s) {
            if (std::isdigit(c)) {
                og.push_back(c);
                rev.push_front(c);
            } else if (std::isalpha(c)) {
                og.push_back(std::tolower(c));
                rev.push_front(std::tolower(c));
            }
        }

        for ( int i = 0; i < og.size(); i++ ) {
            if (rev.at(i) != og.at(i)) {
                return false;
            }
        }
        return true;
    }
};
