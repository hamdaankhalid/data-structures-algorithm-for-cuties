/*
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

    A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

function letterCombinations(digits: string, res: string[]=[], curr: string = ""): string[] {
  const map = {
      '2': ["a", "b", "c"],
      '3': ["d", "e", "f"],
      '4': ["g", "h", "i"],
      '5': ["j", "k", "l"],
      '6': ["m", "n", "o"],
      '7': ["p", "q", "r", "s"],
      '8': ["t", "u", "v"],
      '9': ["w", "x", "y", "z"]
  }
  
  if (digits.length === 0) {
      if (curr !== "") {
       res.push(curr);   
      }
      return res;
  }
  
  // take one possibility and branch off
  const chosen = digits[0];
  const remainingDigits = digits.slice(1);
  
  for(let choice of map[chosen]) {
      const newConstructed = curr+choice;
      letterCombinations(remainingDigits, res, newConstructed);
  }
  
  return res;
};
