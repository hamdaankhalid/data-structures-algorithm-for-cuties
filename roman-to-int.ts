function romanToInt(s: string): number {
  const romans  = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000,
      };
  
  let prev = null;
  let result = 0;
  
  for(let char of s) {

      const val = romans[char];
      if(prev && (prev < val)) {
          // we have a subtraction scenario
          // subtract by twice of prev because later we also add it.
          result -= 2*prev;
      } else {
          prev = val;
      }
      
      result += val;
      console.log(result)
  }
  
  return result;
};
