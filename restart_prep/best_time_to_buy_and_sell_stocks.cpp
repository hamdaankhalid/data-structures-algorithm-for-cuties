#include <algorithm>
#include <utility>
#include <vector>

/*
 *You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * */

/*
 * Pretend to make a sale everyday, tracking the lowest buying price so far.
 **/
class Solution {
public:
    int maxProfit(std::vector<int>& prices) {
		int maxProfit = 0;
		if (prices.size() == 0)
			return maxProfit;

		int lowestBuySoFar = prices[0];
		for (int i = 0; i < prices.size(); i++) {
			int currPrice = prices[i];
			lowestBuySoFar = std::min(currPrice, lowestBuySoFar);
			int ifSoldToday = currPrice - lowestBuySoFar;
			maxProfit = std::max(maxProfit, ifSoldToday);
		}
		return maxProfit;
    }
};
