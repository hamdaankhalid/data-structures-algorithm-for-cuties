function matrixBlockSum(mat: number[][], k: number): number[][] {
  const answer = [];
  for(let i of mat) {
      answer.push(i.slice());
  }
  
  for(let row = 0; row < mat.length; row++) {
      for (let col = 0; col < mat[0].length; col++) {
          
          const upperRowBound = (row + k) < mat.length ? row + k : mat.length - 1;
          const lowerRowBound = (row - k) > -1 ? row - k : 0;
          
          const upperColBound = (col + k) < mat[0].length ? col + k : mat[0].length - 1;
          const lowerColBound = (col - k) > -1 ? col - k : 0;
          
          let total = 0;
          for(let innerRow = lowerRowBound; innerRow <= upperRowBound; innerRow++) {
              for(let innerCol = lowerColBound; innerCol <= upperColBound; innerCol++) {
                  total += mat[innerRow][innerCol];
              }
          }
          
          answer[row][col] = total;
      }
  }
  
  return answer;
};
