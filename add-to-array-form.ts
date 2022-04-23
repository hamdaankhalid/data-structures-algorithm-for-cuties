function addToArrayForm(num: number[], k: number): number[] {
  const kArr = numberToArr(k);
  
  kArr.reverse();
  
  num = num.reverse();
  
  const result = [];
  
  let i = 0;
  const upperBound = Math.max(num.length , kArr.length);
  let carry = 0;
  
  while (i < upperBound) {
      const candidate1 = kArr.length > i ?  kArr[i] : 0;
      const candidate2 = num.length  > i ? num[i] : 0;
      //console.log(candidate1, candidate2);
      
      const summed = candidate1 + candidate2 + carry;
     //console.log(summed, "SUMMED")
      
      
      let val: number;
      if (summed>9) {
          const stringSum = String(summed);
          carry = Number(stringSum.slice(0, stringSum.length - 1));
          val = Number(stringSum[stringSum.length - 1]);
          //console.log(carry, val);
      } else {
          carry = 0;
          val = summed;
      }
      
      result.unshift(val);
      i++;
  }
  
  if (carry > 0) {
      result.unshift(carry);
  }
  
  return result;
};

function numberToArr(num: number): number[] {
  const result = [];
  
  let numLength = 1;
  while(num / (10 ** numLength) > 1) {
      numLength++;
  }
  
 // console.log(numLength)
  
  let placement = 1;
  
  while (result.length <= numLength) {
      
      let digit;
      if (placement === 1) {
          digit = num % (10);
      } else {
          digit = (num % (10 ** placement)) - (num % (10 ** (placement - 1)));
          digit /= (10**(placement-1));
      }
      
      result.unshift(Number(digit));
      
      placement++;
  }
  
  if (result[0] === 0) {
      result.shift();
  }
  
  return result;
}
