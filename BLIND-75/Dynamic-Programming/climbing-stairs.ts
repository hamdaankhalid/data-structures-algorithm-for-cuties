function climbStairs(n: number, memo: Map<number, number> = new Map<number, number>()): number {
  if(memo.has(n)) {
      return memo.get(n);
  }
  
  if (n === 0) {
     return 1; 
  }
  
  if (n < 0) {
      return 0;
  }
  
  memo.set(n, climbStairs(n - 2, memo) + climbStairs(n - 1, memo));
  
  return memo.get(n);
};
