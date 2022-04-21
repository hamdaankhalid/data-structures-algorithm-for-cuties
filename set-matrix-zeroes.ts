/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rowsToZero = new Set<number>();
  const colsToZero = new Set<number>();
  
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === 0) {
              if (!rowsToZero.has(row)) {
                  rowsToZero.add(row)
              }
              if (!colsToZero.has(col)) {
                  
                  colsToZero.add(col)
              }
          }
      }
  }

  for (let i of rowsToZero) {
      for(let j = 0; j < matrix[0].length; j++) {
          matrix[i][j] = 0;
      }
  }

  for (let k of colsToZero) {
      for(let l = 0; l < matrix.length; l++) {
          matrix[l][k] = 0;
      }
  }
};
