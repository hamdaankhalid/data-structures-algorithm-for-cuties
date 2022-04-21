function spiralOrder(matrix: number[][]): number[] {
  const res = [];

  
  while(matrix.length > 0) {
      //up
      res.push(...matrix.shift());
      
      if (matrix.length === 0) {
          return res.filter((x) => x != null );;;
      }
      
      //rigthMostColumn up to Down
      res.push(...matrix.map((row) => row[row.length - 1]));
      matrix.forEach(row => row.pop());
      

      if (matrix.length === 0) {
          return res.filter((x) => x != null );;
      }
      
      // left to right bottom most row
      res.push(...(matrix.pop().reverse()));
      
      if (matrix.length === 0) {
          return res.filter((x) => x != null );;
      }
      
      // left most column down to up
      res.push(
      ...(
               matrix.map(row => row[0]).reverse()
          )
      )
       matrix.forEach(row => row.shift());
      
      if (matrix.length === 0) {
          return res.filter((x) => x != null );;
      }

  }
  
 const filteredRes = res.filter((x) => x != null );
  
  return filteredRes;
};
