function isPalindrome(s: string): boolean {
  let sanitzed = s.replace(/[^\w\s]|_/g, "")
       .replace(/\s+/g, " ").replace(/\s/g, "").toLowerCase();
  
  let l = 0;
  let r = sanitzed.length-1;
  console.log(sanitzed)
  while ( l < r ) {
      if(sanitzed[l] !== sanitzed[r]) {
          return false;
      }
      l++;
      r--;
  }
  return true;
};
