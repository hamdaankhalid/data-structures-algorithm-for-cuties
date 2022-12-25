class Solution {
public:
    int uniquePaths(int m, int n) {
        int dp[m+1][n+1];
        for (int i = 0; i < n+1; i++) {
            dp[0][i] = 1;
            dp[1][i] = 1;
        }

        for (int i = 0; i < m+1; i++) {
            dp[i][0] = 1;
            dp[i][1] = 1;
        }

        for (int row = 2; row < m+1; row++) {
            for (int col = 2; col < n+1; col++) {
                dp[row][col] = dp[row-1][col] + dp[row][col-1];
            }
        }

        return dp[m][n];
    }
};
