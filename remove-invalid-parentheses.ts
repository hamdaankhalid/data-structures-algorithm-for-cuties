function removeInvalidParentheses(s: string): any {
  const minRemovals = isBalanced(s);
  //console.log(minRemovals);
  
  const q : string[]= [];
  const ht = new Set();
  q.push(s);
  const res: string[] = [];
  while(q.length > 0) {
      const ss = q.shift();
      
      if(ht.has(ss)){ 
          continue;
      }
      
      ht.add(ss);
      if(isBalanced(ss) === 0){
          res.push(ss);
      }
      else if (res.length === 0){
          for(let i=0; i<ss.length; i++) {
              if(ss[i]==')'|| ss[i]=='(') {
                  const candidate = ss.slice(0, i)+ss.slice(i+1);
                  //console.log(candidate);
                  q.push(candidate);
              }
          }
      }   
  }
  
  return res;
}


function isBalanced(s: string): number {
  let removals = 0;
  let open = 0;
  let close = 0;
  for(let c of s){
      if ((c !== ")") && (c!="(")) {
          continue;
      }
      if ((c ===")") && (close >= open)) {
          removals++;
      }else if (c===")"){
          close++;
      }else{
          open++;
      }
  }
  return removals+Math.abs(close-open);
}
