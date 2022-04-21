function isValid(s: string): boolean {
  const validCheckStack = []
  const closeToOpen = {
      ')':'(',
      '}': '{',
      ']': '['
  }
  
  const openings = ['(', '{','['];
  
  for (let bracket of s) {
      
      
      if (openings.includes(bracket)) {
          validCheckStack.push(bracket)
      } else {
          // the top most must match the closer

          if (validCheckStack[validCheckStack.length - 1] !== closeToOpen[bracket]) {
              return false;
          }
          
          validCheckStack.pop();
      }
  }
  
  return validCheckStack.length === 0;
  
};
