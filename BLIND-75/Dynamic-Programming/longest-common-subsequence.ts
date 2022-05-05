function longestCommonSubsequence(text1: string, text2: string): number {
  const iterateOver = text1.length > text2.length ? text2 : text1;
  const nonIter = iterateOver == text1 ? text2 : text1;
  const memo = {};
  return iter(iterateOver, nonIter, 0, 0, 0, "", memo);
};

function iter(str1: string, str2: string, p1: number, p2: number, longestSs: number, runningSs: string, memo: Object) {
  const combo = `${p1}_${p2}`;

  if(combo in memo) {
      return memo[combo]
  }
  
  if(p1 === str1.length || p2 === str2.length) {
      return Math.max(longestSs, runningSs.length);
  }
  
  // one case in which we pick the str2, one in which we dont
  const possibility1 = str1[p1] === str2[p2] ? iter(str1, str2, p1+1, p2+1, longestSs, runningSs+str1[p1], memo) : 0;
  const possibility2 = iter(str1, str2, p1+1, p2+1, longestSs, runningSs, memo);
  
  const possibility3 = iter(str1, str2, p1+1, p2, longestSs, runningSs, memo);
  
  const possibility4 = iter(str1, str2, p1, p2+1, longestSs, runningSs, memo);

  const res = Math.max(
      possibility1,
      possibility2,
      possibility3,
      possibility4
  );
  

  return res;
}
