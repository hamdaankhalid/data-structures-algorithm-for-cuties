/*
Linear time
*/

function divide(dividend: number, divisor: number): number {
  let count = 0;
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  while(absDividend >= absDivisor) {
      absDividend -= absDivisor;
      count++;
  }
  
  const res = ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? count : -1*count;
  
  if (res > (2**31)-1) {
      return (2**31)-1;
  }
  
  if (res < -1*2**31) {
      return -1*2**31;
  }
  
  return res;
};

/************
 * LOG(N) TIME
 */

 