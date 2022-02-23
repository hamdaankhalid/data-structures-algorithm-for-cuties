function maxProfit(prices: number[], bought: number | null = null, sold: number | null = null): number {
  //     let minPrice = prices[0];
  //   let profit = 0;
  
  //   for (let currentPrice of prices) {
  //     if (currentPrice > minPrice) {
  //       profit = Math.max(profit, currentPrice - minPrice);
  //     } else {
  //       minPrice = currentPrice;
  //     }
  //   }
  //   return profit;
      
      // at any given point you can either buy or sell
  
      // base cases
      if((bought!==null) && (sold!==null)) {
          return sold - bought;
      }
      
      if (!prices || prices.length === 0){
          return 0
      }
  
      const sells = [];
      if (bought === null) {
          // must buy or hold but cannot sell
          sells.push(
              maxProfit(prices.slice(1), bought, null) // hold scenario
          )
          sells.push(
              maxProfit(prices.slice(1), prices[0], null) // buy scenario
          )
      } else {
          // can sell or hold
          sells.push(
              maxProfit(prices.slice(1), bought, null) // hold scenario
          )
          sells.push(
              maxProfit(prices.slice(1), bought, prices[0]) // sell scenario
          )
      }
      //console.log(prices, sells)
      return Math.max(...sells);
  };
