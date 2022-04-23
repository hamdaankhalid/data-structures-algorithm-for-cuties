function numberOfSteps(num: number, steps: number = 0): number {
  if(num === 0) {
      return steps;
  }
  

  if (num % 2 === 0) {
      return numberOfSteps(num / 2, steps+1);
  } else {
      return numberOfSteps(num - 1, steps+1);
  }
  
};