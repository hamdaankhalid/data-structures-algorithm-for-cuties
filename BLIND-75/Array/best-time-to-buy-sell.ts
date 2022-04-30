function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;
  
  for(let price of prices) {
      if (price <= minPrice) {
          minPrice = price;
      } else {
          profit = Math.max(profit, price - minPrice);
      }
  }
  
  return profit;
};

/**
  go through prices maintainig the minPrice profit,
  at each point you can set a new minPrice if pthe current price is less than the previous price
  otherwise we can check if the current possible profit is better than the overall profit
**/
