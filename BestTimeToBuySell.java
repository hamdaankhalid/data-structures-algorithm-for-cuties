public class BestTimeToBuySell {
  class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int minSoFar = prices[0];
        for (int i = 0; i < prices.length; i++) {
            minSoFar = Math.min(minSoFar, prices[i]);
            max = Math.max(max, prices[i] - minSoFar);
        }
        return max;
    }
}
}
