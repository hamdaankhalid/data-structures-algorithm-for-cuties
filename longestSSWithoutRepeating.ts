/*
"pwwkew"
iterate through string
whenever we have a repeater move left up and remove from global set
keep tracking max length so far
*/
function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  const set = new Set();
  let longest = 0;
  
  for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
          set.delete(s[left]);
          left++;
      }
      set.add(s[right]);
      longest = Math.max(longest, right -  left + 1);
  }
  
  return longest;
};
