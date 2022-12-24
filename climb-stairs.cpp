#include <vector>

class Solution {
public:
    int climbStairs(int n) {
        std::vector<int> memo(n+1, -1);
        return climb(n, memo);
    }

private:
    int climb(int n, std::vector<int>& memo) {
        if (memo.at(n) != -1) {
            return memo.at(n);
        }

        if (n < 0) {
            return 0;
        }

        if (n == 1 || n == 0) {
            return 1;
        }        

        int res = climb(n-1, memo) + climb(n-2, memo);
        memo[n] = res;
        return res;
    }
};