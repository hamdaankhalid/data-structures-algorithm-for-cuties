#include <vector>
#include <algorithm>

class Solution {
public:
    int maxProfit(std::vector<int>& prices) {

        int maxprof = 0;
        for (int i = 1; i < prices.size(); i++) {
            maxprof += std::max(0, prices[i] - prices[i-1]);
        }
        return maxprof;
    }
};

