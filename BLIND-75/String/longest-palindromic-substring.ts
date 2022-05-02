function longestPalindrome(s: string): string {
  let longest = "";
  
  for(let leftPointer = 0; leftPointer < s.length; leftPointer++) {
      let rightPointer = leftPointer;
      while (rightPointer < s.length ) {
          if (isPalin(s, leftPointer, rightPointer)) {
              longest = longest.length > (rightPointer - leftPointer + 1) ? longest : s.slice(leftPointer, rightPointer+1);
          }
          rightPointer++;
      }
  }
  
  return longest;
};

function isPalin(s: string, start: number, end: number): boolean {
  while (start < end) {
      if(s[start] !== s[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}
