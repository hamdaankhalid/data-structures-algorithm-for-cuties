/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
  private sortedNodes: number[];
  private index: number;
  
  constructor(root: TreeNode | null) {
      this.sortedNodes = [] as number[];
      this.index = -1;
      
      this.inorder(root);
  }

  private inorder(root: TreeNode | null) {
      if(!root){
          return
      }
      
      this.inorder(root.left);
      this.sortedNodes.push(root.val);
      this.inorder(root.right);
  }

  next(): number {
      this.index+=1;
      return this.sortedNodes[this.index];
  }

  hasNext(): boolean {
      return this.index+1 < this.sortedNodes.length;
  }
}

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
