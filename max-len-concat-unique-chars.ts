function maxLength(arr: string[], soFar: Set<string> = new Set<string>(), best: number = 0, pointer = 0): number {
   
  if (pointer === arr.length) {
      console.log(soFar)
      return Math.max(best, soFar.size);
  }
  
  let bestCase = best;
  
  const selectedWord = arr[pointer];

  const selectedWordElligible = isWordElligible(soFar, selectedWord);
  

  if (selectedWordElligible) {
      
      selectedWord.split("").forEach((i) => {
          soFar.add(i);
      });
      
      const selectedWordAdded = maxLength(arr, soFar, best, pointer+1);

      bestCase = Math.max(
          bestCase,
          selectedWordAdded
      );

      selectedWord.split("").forEach((i) => {
          soFar.delete(i);
      });
  };
  
  bestCase = Math.max(bestCase, maxLength(arr, soFar, bestCase, pointer+1))
  
  return bestCase;
};

function isWordElligible(checkAgainst: Set<string>, withString: string) {
  const seenBefore = new Set<string>();
  for (let i of withString) {
      if (seenBefore.has(i) || checkAgainst.has(i)) {
          return false;
      } else {
          seenBefore.add(i);
      }
  }
  return true;
}
