function findWords(board: string[][], words: string[]): string[] {
  const trie = new Trie("*");
  
  for (let word of words) {
      trie.addChild(word);
  }
  
  const result = wordsOnBoard(board, trie);
  
  return result;
};


function wordsOnBoard(board: string[][], trie: Trie): string[] {
  const result = new Set<string>();
  const ROWBOUND = board.length;
  const COLBOUND = board[0].length;
  
  for (let row = 0; row < ROWBOUND; row++) {
      for (let col = 0; col < COLBOUND; col++) {
          
          const possibleWords = trie.wordsWithPrefix(board[row][col]);

          if (possibleWords.length === 0) {
              continue;
          }
          
          const visited = new Set<string>();
          visited.add(`${row}_${col}`);
          dfs(row, col, board, board[row][col], trie, result, visited);
      }
  }
  
  return Array.from(result);
}

function dfs(row: number, col: number, board: string[][], wordSoFar: string, trie: Trie, result: Set<string>, visited: Set<string>) {
  const wordsWithPrefix = trie.wordsWithPrefix(wordSoFar);
  
  if (wordsWithPrefix.length === 0) {
      return;
  }
  
  if (wordsWithPrefix.includes(wordSoFar)) {
      result.add(wordSoFar);
  }
  
  const neighborOffsets = [[0,1], [0,-1], [1,0], [-1,0]];
  
  const ROWBOUND = board.length;
  const COLBOUND = board[0].length;
  
  for (let [rowOffset, colOffset] of neighborOffsets) {
      const potentialRow = rowOffset + row;
      const potentialCol = colOffset + col;
      
      if (potentialRow > -1 && potentialCol > -1 && potentialRow < ROWBOUND && potentialCol < COLBOUND &&
         !visited.has(`${potentialRow}_${potentialCol}`)) {
          visited.add(`${potentialRow}_${potentialCol}`);
          dfs(potentialRow, potentialCol, board, wordSoFar+board[potentialRow][potentialCol], trie, result, visited);
          visited.delete(`${potentialRow}_${potentialCol}`);
      }
  }
}


// Build trie of words, go through board, at each row, col do a dfs for all words with prefix from the row col on board, while the prefix is not none, if the word isEnd in trie keep going and dfsing

class Trie {
  children: Map<string, Trie>;
  val: string;
  isEnd: boolean;

  constructor(val: string) {
      this.val = val;
      this.children = new Map<string, Trie>();
      this.isEnd = false;
  }


  addChild(word: string) {
      let curr: Trie = this;
      
      for (let i of word) {
          if (!curr.children.has(i)) {
              curr.children.set(i, new Trie(i));
          }
          
          curr = curr.children.get(i);
      }
      curr.isEnd = true;
  }


  wordsWithPrefix(prefix: string) {
      let curr: Trie = this;
      
      for (let char of prefix) {
          if (!curr.children.has(char)) {
              return [];
          } else {
              curr = curr.children.get(char);
          }
      }
      
      const result = [];
      this.dfsWord(curr, prefix, "", result);
      return result;
  }

  private dfsWord(node: Trie, prefix: string, word: string, result: string[]) {
      if (Array.from(node.children.keys()).length === 0) {
          if (node.isEnd) {
              result.push(prefix+word);
          }
          return;
      }
      
      if (node.isEnd) {
              result.push(prefix+word);
      }
      
      for (let child of node.children.keys()) {
          this.dfsWord(node.children.get(child), prefix, word+child, result);
      }
  }
}














