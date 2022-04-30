function characterReplacement(s: string, k: number): number {
  let longest= 0;
  let leftPointer = 0;
  
  let alphabetToCountMap = new Map<string, number>();

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
      const newChar = s[rightPointer];
      
      if (alphabetToCountMap.has(newChar)) {
          alphabetToCountMap.set(newChar, alphabetToCountMap.get(newChar)+1);
      } else {
          alphabetToCountMap.set(newChar, 1);
      }
      
      // is the window length - highest freq char count <= k? => if yes this is a candidate for longest
      // otherwise we need to update leftPointer and map till we are at a stable point
      let windowLength = rightPointer - leftPointer + 1;
      let highestFreq = getHighestFreq(alphabetToCountMap);
      
      //console.log(highestFreq);
      
      if (windowLength - highestFreq > k) {
          // update leftPointer till this becomes valid
          while(windowLength - highestFreq > k) {
              const decrementChar = s[leftPointer];
              alphabetToCountMap.set(decrementChar, alphabetToCountMap.get(decrementChar)-1);
              leftPointer++;
              highestFreq = getHighestFreq(alphabetToCountMap);
              windowLength = rightPointer - leftPointer + 1;
          }
      }
      
      longest = Math.max(rightPointer - leftPointer + 1, longest);
  }
  
  return longest;
};

function getHighestFreq(alphabetMap: Map<string, number>) {
  let highestFreq = 0;
  for(let key of alphabetMap.keys()) {
      highestFreq = Math.max(alphabetMap.get(key), highestFreq);
  }
  return highestFreq;
}
