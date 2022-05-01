function countSubstrings(s: string): number {
  let count = 0;
  
  for(let start = 0; start < s.length; start++) {
      for(let end = start; end < s.length; end++) {
          count += isPal(s, start, end) ? 1 : 0;
      }
  }
  return count;
};

function isPal(s: string, start: number, end: number) {
  //console.log(s.slice(start, end+1));
  while(start<end) {
      if(s[start] !== s[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}
