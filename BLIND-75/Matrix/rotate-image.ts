/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const mp = new MatrixManipulate(matrix)
  mp.transpose();
  mp.reverseColumns();
};

/**
* Rotated clockwise = Transpose + Reverse every column!!!!!!!!!!
**/

class MatrixManipulate {
  matrix: number[][];

  constructor(matrix: number[][]) {
      this.matrix = matrix;
  }

  transpose(): void {
      // reverse diagonal for first row left top to right down
      this.reverseDiagonalUpperRow();
      // reverse diagonal for right most column top to bottom

      this.reverseDiagonalRightCol();

  }
  
  private reverseDiagonalUpperRow(): void {
      const diagonalVals = [];
      for(let i = 0; i<this.matrix[0].length; i++) {
          // collect diagonal vals
          let diagRow = 0;
          let diagCol = i
          const innerDiags =[]
          while(diagCol > -1 && diagRow < this.matrix.length) {
              innerDiags.push(this.matrix[diagRow][diagCol]);
              diagCol--;
              diagRow++;
          }
          
          diagonalVals.push(innerDiags);
      }

      for(let i = 0; i<this.matrix[0].length; i++) {
          // collect diagonal vals
          let diagRow = 0;
          let diagCol = i
          const relevant = diagonalVals.shift()
          while(diagCol > -1 && diagRow < this.matrix.length) {
              this.matrix[diagRow][diagCol] = relevant.pop();
              diagCol--;
              diagRow++;
          }
      }
  }

  private reverseDiagonalRightCol(): void {
      const diagonalVal = [];
      const lastCol = this.matrix[0].length -1;
      
      for(let row = 1; row < this.matrix.length; row++) {
          let diagRow = row;
          let diagCol = lastCol;
          const innerDiags = [];
          while(diagCol > -1 && diagRow < this.matrix.length) {
              innerDiags.push(this.matrix[diagRow][diagCol]);
              diagCol--;
              diagRow++;
          }
          diagonalVal.push(innerDiags);
      }
      
      for(let i = 1; i<this.matrix.length; i++) {
          // collect diagonal vals
          let diagRow = i;
          let diagCol = lastCol;
          const relevant = diagonalVal.shift()
          while(diagCol > -1 && diagRow < this.matrix.length) {
              this.matrix[diagRow][diagCol] = relevant.pop();
              diagCol--;
              diagRow++;
          }
      }
  }

  reverseColumns(): void {
      for (let row of this.matrix) {
          row.reverse();
      }
  }
}