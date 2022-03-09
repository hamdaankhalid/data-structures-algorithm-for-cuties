class TrieNode {
  public value: string;
  public isEnd: boolean;
  public nextUp: Record<string, TrieNode>;
  
  constructor(value: string) {
      this.value = value;
      this.isEnd = false;
      this.nextUp = {};    
  }
}

class WordDictionary {
  private head: TrieNode;

  constructor() {
      this.head = new TrieNode("*");
  }

  addWord(word: string): void {
      // go char by char of word, if we find the char in there set it as next otherwise keep adding a new node in next Up's
      let currNode = this.head;

      for (let char of word) {
          const potential = currNode.nextUp[char]
          if (potential) {
              currNode = potential;
          } else {
              const newNode = new TrieNode(char);
              currNode.nextUp[char] = newNode;
              currNode = newNode;
          }
      }
      currNode.isEnd = true;
  }

  search(word: string): boolean {
      return this.dfs(word, this.head);
  }
  
  private dfs(word: string, node: TrieNode): boolean {
      
      if(word.length === 0){
          return node.isEnd;
      }

      const toMatch = word[0]; 
      const remainingWord = word.slice(1); 

      
      if (toMatch === "."){
          for (const [k,v] of Object.entries(node.nextUp)) {
              const path =this.dfs(remainingWord, v);
              if (path){
                  return true;
              }
          }
          return false;
      } else {
          const potential = node.nextUp[toMatch];
          if(potential == null){
              return false;
          }
          return this.dfs(remainingWord, potential); 
      }
  }
}

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/
