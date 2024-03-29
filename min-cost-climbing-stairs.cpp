class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int topfloor = cost.size();
        int dp[topfloor + 1];
        dp[0] = 0;
        dp[1] = 0;
        for (int i = 2; i <= topfloor; i++) {
            dp[i] = std::min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]
            );
        }
        return dp[topfloor];
    }
};
