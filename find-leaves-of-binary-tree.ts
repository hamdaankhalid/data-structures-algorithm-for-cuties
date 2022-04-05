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

function findLeaves(root: TreeNode | null): number[][] {
  const res = [];
  let end = false;
  while(!end) {
      const rootToLeaf = [];
      end = recurseToLeaf(root, rootToLeaf, null, null);
      res.push(rootToLeaf);
  }
  return res;
};

function recurseToLeaf(root: any, result: any, prev: any, left: any) {
  if(!root) {
      return false;
  }
  
  if(!root.left && !root.right) {
      result.push(root.val);
      if (!prev) {
          return true;
      }

      if(left) {
         prev.left = null;
         } else {
             prev.right = null;
        }
  }
  
  if(root.left) {
      recurseToLeaf(root.left, result, root, true)
  }
  
  if(root.right) {
      recurseToLeaf(root.right, result, root, false)
  }
  
  return false;
}
