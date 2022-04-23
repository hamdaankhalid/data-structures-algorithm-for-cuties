class Node {
  isEnd: boolean = false;
  val: string;
  children: Map<string, Node>;
  
  constructor(val: string) {
      this.val = val;
      this.children = new Map<string, Node>();
  }
}

class Trie {
  private root: Node;

  constructor() {
      this.root = new Node("*");
  }

  insert(word: string): void {
      let curr = this.root;
      
      for (let i of word) {
          if (curr.children.has(i)) {
              curr = curr.children.get(i);
          } else {
              curr.children.set(i, new Node(i));
              curr = curr.children.get(i);
          }
      }
      //console.log(curr);
      curr.isEnd = true;
  }

  search(word: string): boolean {
      let curr = this.root;
      
      for(let i of word) {
          if(curr.children.has(i)) {
              curr = curr.children.get(i);
          } else {
              return false;
          }
      }
      //console.log(curr)
      return curr.isEnd;
  }

  startsWith(prefix: string): boolean {
      let curr = this.root;
      
      for(let i of prefix) {
          if(curr.children.has(i)) {
              curr = curr.children.get(i);
          } else {
              return false;
          }
      }
      
      return true;
  }
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/