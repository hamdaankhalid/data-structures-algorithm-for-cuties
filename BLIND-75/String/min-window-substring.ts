function minWindow(s: string, t: string): string {
  let minWindowSs = "i".repeat(1000);
  
  const tFreqMap = {};

  for (let i of t) {
      if(i in tFreqMap) {
          tFreqMap[i]++;
      } else {
          tFreqMap[i] = 1;
      }
  }
  
  const sFreqMap = {};

  let leftPointer = 0;
  
  for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
      let substring = s.slice(leftPointer, rightPointer+1);
      

      // update sFreqMap
      if (s[rightPointer] in sFreqMap) {
          sFreqMap[s[rightPointer]]++;
      } else {
          sFreqMap[s[rightPointer]] = BigInt(1);
      }
      

      if (valid(sFreqMap, tFreqMap)) {
          // keep moving the leftpointer till its not valid while updating minWindowSs
          while (valid(sFreqMap, tFreqMap)) {
              minWindowSs = minWindowSs.length < (rightPointer -leftPointer + 1) ? minWindowSs : s.slice(leftPointer, rightPointer+1);
              // decrement the leftPointer val from sFreqMap
              sFreqMap[s[leftPointer]]--;
              leftPointer++;
          }
          
      }
  }

  return minWindowSs==="i".repeat(1000) ? "" : minWindowSs;
};

function valid(substringMap:any, matchMap: any): boolean {

  for(let i of Object.keys(matchMap)) {
      if(!(i in substringMap) || substringMap[i] < matchMap[i]) {
          return false;
      }
  }
  
  return true;
}

// O(N) TC & O(1) SC