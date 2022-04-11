const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => Math.trunc(a / b),
  "*": (a, b) => a * b,
};


function evalRPN(tokens: string[]): number {
  let currentPos = 0;
  while (tokens.length > 1) {        
      while (!(tokens[currentPos] in OPERATORS)) {
          currentPos+=1;
      }
      
      const num1 = Number(tokens[currentPos-1]);
      const num2 = Number(tokens[currentPos-2]);
      
      const operator = OPERATORS[tokens[currentPos]];
      const combinedMath = operator(num2, num1);
      tokens[currentPos] = combinedMath;
      
      tokens.splice(currentPos - 2, 2);
      currentPos-=2;
  }
  
  return tokens[0] as unknown as number;
};

/**
* ["2","1","+","3","*"]
*/
