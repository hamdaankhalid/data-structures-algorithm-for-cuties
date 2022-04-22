const StrToNumMap = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
}

const numstrings = Array.from(Object.keys(StrToNumMap));

function myAtoi(s: string): number {
  let sign = 1;
  let number = 0;
  let startAt = 0;

  while (
      startAt < s.length &&
      ( 
          s[startAt] !== '-' && s[startAt] !== '+' &&
          !numstrings.includes(s[startAt])
     ) 
  ) {
      if (s[startAt] !== ' ') {
          return 0;
      }
      startAt++;
  }

  if (s[startAt] === '-') {
      startAt++;
      sign = -1;
  }

  if (s[startAt] === '+') {
      if(sign === -1) {
          return 0;
      }
      startAt++;
  }

  let endsAt = startAt;

  while ( endsAt < s.length && (numstrings.includes(s[endsAt])) ) {
      endsAt++;
  }
  
  // console.log(startAt, endsAt);
  
  const numericalPart = s.slice(startAt, endsAt);
  let multiplier = numericalPart.length - 1;
  

  for (let i of numericalPart) {
      number += StrToNumMap[i] * (10**multiplier);
      multiplier--;
  }
  
  let result = number * sign;
  
  if (result < (-1*2)**31) {
      return (-2)**31;
  }
  
  if (result > (2**31) - 1) {
      return (2**31) - 1;
  }
  
  return result;
};
