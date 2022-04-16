/*
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    
    find all anagrams for eat, and eliminate them as you go
*/


function groupAnagrams(strs: string[]): string[][] {
  const sortedDict = new Map();
  for (let word of strs) {
      const sortedWord = word.split("").sort().join("");
      if (sortedDict.has(sortedWord)) {
          sortedDict.get(sortedWord).push(word);
      } else {
          sortedDict.set(sortedWord, [word]);
      }
  }

  return Array.from(sortedDict.values())
};

/*
  At each word 
*/
