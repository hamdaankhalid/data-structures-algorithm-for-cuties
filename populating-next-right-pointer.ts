/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  // creat bfs levels
  const levelizer = new Levels()
  levelizer.bfs(root);
  
  const levels = levelizer.levels;
  
  for (let level of levels.keys()) {
      const row = levels.get(level);

      for (let i = 0; i < row.length - 1; i++) {
          row[i].next = row[i+1];
      }
  }
  
  return root;
};


class Levels {
  public readonly levels: Map<number, Node[]>;

  constructor() {
      this.levels = new Map<number, Node[]>();
  }

  bfs(root: Node | null) {
      const queue: QueueObj[] = [{'currNode': root, 'level': 0}];
      
      while (queue.length > 0) {
          const {currNode, level} = queue.shift();
          
          // add the currNode to levels map
          if (this.levels.has(level)) {
              this.levels.get(level).push(currNode);
          } else {
              this.levels.set(level, [currNode]);
          }
          
          const nextLevel = level + 1;
          if (currNode && currNode.left) {
              queue.push({'currNode': currNode.left, 'level': nextLevel});
          }
          
          if (currNode && currNode.right) {
              queue.push({'currNode': currNode.right, 'level': nextLevel});
          }
      }
  }
}

interface QueueObj {
  'currNode': Node;
  'level': number
}
