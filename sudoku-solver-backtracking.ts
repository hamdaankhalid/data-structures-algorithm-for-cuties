/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  backTrackSolve(board);
};

function backTrackSolve(board: string[][]): boolean {
  if (boardIsFull(board)) {
      return true;
  }

  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
          if (board[row][col] !== ".") {
              continue;
          }
          
          const validChoices = getValidChoices(board, row, col);

          for (let choice of validChoices) {
              board[row][col] = choice;
              if (backTrackSolve(board)) {
                  return true;
              }
          }
          
          board[row][col] = '.';
          return false;
      }
  }
  
  return false;
}

function boardIsFull(board: string[][]): boolean {
  for(let row of board) {
      if (row.some(i => i === ".")) {
          return false;
      }
  }
  return true;
}

function getValidChoices(board: string[][], row: number, col: number) {
  
  const options = ['1','2','3','4','5','6','7','8','9'];
  
  // filter from row scenario
  for(let j of board[row]) {

      if (options.includes(j)) {
          options.splice(options.indexOf(j), 1);
      }
  }
  
  //console.log(options, 'rows filtered');

  // filter from cols scenario
  for (let rowVal = 0; rowVal < board.length; rowVal++) {
      const boardVal = board[rowVal][col];
      if(options.includes(boardVal)) {
          options.splice(options.indexOf(boardVal), 1);
      }
  }
  
  //console.log(options, 'cols filtered');
  
  
  // filter from 3*3 scenario
  const innerMatrix = getInnnerMatrix(board, row, col);
  for (let i = 0; i < innerMatrix.length; i++) {
      for (let j = 0; j < innerMatrix[0].length; j++) {
         const boardVal = innerMatrix[i][j];
          if(options.includes(boardVal)) {
              options.splice(options.indexOf(boardVal), 1);
          }   
      }
  }

  return options;
}


function getInnnerMatrix(board: string[][], row: number, col: number): string[][] {
  const rowMin = Math.floor(row / 3)*3;
  const colMin = Math.floor(col / 3)*3;
  const rowMax = rowMin+3;
  const colMax = colMin+3;
  
  const innerMatrix = [];
  
  for(let i = rowMin; i < rowMax; i++) {
      const innerCol = [];
      for(let j = colMin; j < colMax; j++) {
          innerCol.push(board[i][j]);
      }
      innerMatrix.push(innerCol);
  }
  
  return innerMatrix;
}

/**

iterate over board
when you come across a "."
try a number [1..9], at each scenario either 1 of them will be valid or none
set of 9 scenario's till one of them does not return false.

base case will be when board is full.


base case will be when either the board is out of valid values -> false
or
when the board is full -> true

**/
