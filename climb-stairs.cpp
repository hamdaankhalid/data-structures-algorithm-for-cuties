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


class Solution2 {
public:
    int climbStairs(int n) {
        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        int dp[n+1];
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i < n+1; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }

        return dp[n];
    }
};

class Solution3 {
public:
    int climbStairs(int n) {
        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        int p = 1;
        int q = 1;

        for (int i = 2; i < n+1; i++) {
            std::cout << p << ", " << q << std::endl;
            int temp = p;
            int temptwo = q;
            p = q;
            q = temp + temptwo;
        }

        return q;
    }
};