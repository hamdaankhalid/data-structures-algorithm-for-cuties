function isAnagram(s: string, t: string): boolean {
  const sMap = new Map<string, number>();
  
  for(let i of s) {
      if(sMap.has(i)) {
          sMap.set(i, sMap.get(i)+1);
      } else {
          sMap.set(i, 1);
      }
  }
  
  for (let j of t) {
      if(!sMap.has(j)) {
          return false;
      }
      
      sMap.set(j, sMap.get(j)-1);
  }
  
  for(let i of s) {
      if (sMap.get(i) !== 0) {
          return false;
      }
  }
  
  return true;
};
