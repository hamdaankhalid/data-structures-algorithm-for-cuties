function isMatch(s: string, p: string, memo: Map<string, boolean> = new Map<string, boolean>()): boolean {
  const combo = `${s}_${p}`

  if (memo.has(combo)) {
      return memo.get(combo);
  }

  if (s.length === 0 && p.length === 0) {
     return true; 
  }
  
  const allStar = p.length === 0 ? false : p.split("").every((i) => i === "*") ;

  if (s.length === 0 || p.length === 0) {
      return allStar;
  }
  
  const patternSub = p[0];
  if (patternSub !== "*" && patternSub !== "?") {
      if (s[0] !== p[0] ) {
          memo.set(combo, false);
          return false;
      }
      const res = isMatch(s.slice(1), p.slice(1), memo);
      memo.set(combo, res);
      return res;
  } else if (patternSub === "?") {
      const res = isMatch(s.slice(1), p.slice(1), memo);
      memo.set(combo, res);
      return res;
  } else {
      //patternsub is "*"
      const res = isMatch(s, p.slice(1), memo) || isMatch(s.slice(1), p, memo) || isMatch(s.slice(1), p.slice(1), memo);
      memo.set(combo, res);
      return res;
  }
  
};
