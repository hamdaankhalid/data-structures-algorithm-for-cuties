function addBinary(a: string, b: string, c: string = '0', d: string = ''): string {
  if(a.length === 0 && b.length === 0 ) {
      if (c !== "0") {
         d = `${c}${d}`; 
      }
      return d;
  }
  
 const aEnd = a.length > 0 ? a.slice(-1) : "0"
 const bEnd = b.length > 0 ? b.slice(-1) : "0"
 
  const [val, carry] = add(aEnd, bEnd, c);

  console.log(aEnd, "+", bEnd, "+", c, " = ", val, carry);

  const runningAns = `${val}${d}`;
  const aCopy = a.slice(0, a.length-1);
  const bCopy = b.slice(0, b.length-1);
  return addBinary(aCopy, bCopy, carry, runningAns);
};

function add(a: string, b:string, c: string): string[] {
  if (a === "1" && b === "1" && c === "1") {
      return ["1", "1"];
  }
  
  if (a === "1" && b === "0" && c === "0") {
      return ["1", "0"];
  }
  
  if (a === "0" && b === "1" && c === "0") {
      return ["1", "0"];
  }
  
  if (a === "1" && b === "1" && c === "0") {
      return ["0", "1"];
  }
  
  if (a === "0" && b === "1" && c === "1") {
      return ["0", "1"];
  }
  
  if (a === "1" && b === "0" && c === "1") {
      return ["0", "1"];
  }
  
   if (a === "0" && b === "0" && c === "1") {
      return ["1", "0"];
  }
  
  if (a === "0" && b === "0" && c === "0") {
      return ["0", "0"];
  }
  
  else{
      throw new Error(`${a}, ${b}, ${c} unexpected addition case`);
  }
}

/*
1101
101

10010
*/