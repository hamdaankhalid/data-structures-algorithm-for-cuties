function exist(board: string[][], word: string): boolean {
  const beginAt = word[0];
  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
          if (board[row][col] === beginAt) {
              const seenBefore = new Set<string>();
              const wordFirstCharOmitted = word.slice(1);
              seenBefore.add(`${row}_${col}`);
              if (wordDfs(board, row, col, wordFirstCharOmitted, seenBefore)) {
                  return true;
              }
          }
      }
  }
  
  return false;
};


function wordDfs(board: string[][], row: number, col: number, word: string, seenBefore: Set<string>): boolean {
  if (word.length === 0) {
      return true;
  }
  
  const potentials = nextPaths(board, row, col, word[0], seenBefore);

  for (let path of potentials) {
      const [potentialRow, potentialCol] = path;
      seenBefore.add(`${potentialRow}_${potentialCol}`);
      if (wordDfs(board, potentialRow, potentialCol, word.slice(1), seenBefore)) {
          return true;
      } else {
          seenBefore.delete(`${potentialRow}_${potentialCol}`);
      }
  }
  
  return false;
}


function nextPaths(board: string[][], row: number, col: number, nextChar: string, seenBefore: Set<string>): number[][] {
  const paths = [];
  [[0, 1], [0, -1], [1, 0], [-1, 0]].forEach( (path) => {
      
      const [rowOffset, colOffset] = path;

      const potentialRow = row+rowOffset;
      const potentialCol = col+colOffset;
      
      if (
          potentialRow > -1 &&
          potentialRow < board.length &&
          potentialCol > -1 &&
          potentialCol < board[0].length &&
          !seenBefore.has(`${potentialRow}_${potentialCol}`) &&
          board[potentialRow][potentialCol] === nextChar
      ) {
          paths.push([potentialRow, potentialCol]);
      }
      
  });
  
  return paths;
}


/**
["A","B","C","E"]
["S","F","E","S"]
["A","D","E","E"]
*/
