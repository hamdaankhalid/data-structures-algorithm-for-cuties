function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0 || s.length === 1) {
      return s.length;
  }
  
  let longest = 1;
  let leftPointer = 0;
  let seenBefore = new Set<string>();
  seenBefore.add(s[0]);
  
  for (let rightPointer = 1; rightPointer<s.length; rightPointer++) {
      if (seenBefore.has(s[rightPointer])) {
          // move leftPointer removing all elements till seenBefore does not have rightPointer
          while(seenBefore.has(s[rightPointer])) {
              seenBefore.delete(s[leftPointer]);
              leftPointer++;
          }
      }
      seenBefore.add(s[rightPointer]);
      longest = Math.max(rightPointer - leftPointer + 1, longest);
  }
  return longest;
};
