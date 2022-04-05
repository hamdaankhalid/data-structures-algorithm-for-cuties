function decodeString(s: string): string {    
  const stack = [];

   for (let i of s) {
       if (i !== ']') {
           stack.push(i);
       } 
       else {
           let subStr = "";
           
           let lastElement = stack[stack.length-1];
           while(lastElement !== "["){
               subStr = `${stack.pop()}${subStr}`;
               lastElement = stack[stack.length-1];
           }
           stack.pop();
           
           let k = "";
           while (stack.length > 0 && !isNaN(stack[stack.length-1])) {
               k = `${stack.pop()}${k}`;
           }
           
           let multipString = ""
           for (let i = 0; i < Number(k); i++) {
               multipString = `${subStr}${multipString}`;
           }
           stack.push(multipString);
       }
   }
   
   return stack.join('');
};
