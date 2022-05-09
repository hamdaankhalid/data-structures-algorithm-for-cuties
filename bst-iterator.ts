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
  private nodes: number[] = [];
  private currIdx: number = 0;

  constructor(root: TreeNode | null) {
      this.initNodes(root);
  }

  next(): number {
      const next = this.nodes[this.currIdx];
      this.currIdx++;
      return next;
  }

  hasNext(): boolean {
      return this.currIdx < this.nodes.length;
  }

  private initNodes(root: TreeNode | null) {
      if(!root) {
          return null;
      }
      
      if (root.left) {
          this.initNodes(root.left);
      }
      
      this.nodes.push(root.val);
      
      if (root.right) {
          this.initNodes(root.right);
      }
      return;
  }
}

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
