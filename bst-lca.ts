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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // get path to p
  const plist = []
  constructPath(root, p, plist)
  
  // get path to q
  const qlist = []
  constructPath(root, q, qlist)
  
  for (let i = qlist.length-1; i >= 0; i--) {
      
      if(plist.includes(qlist[i])) {
          return qlist[i];
      }
  }
  
  return null;
};

function constructPath(root: TreeNode | null, searchFor: TreeNode, path: TreeNode[]) {
  if(!root) {
      return false;
  }
  
  if(root === searchFor) {
      path.push(root);
      return true;
  }


  if(root.val < searchFor.val) {
       path.push(root);
      if (constructPath(root.right, searchFor, path)) {
          return true
      } else {
          path.pop()
      };
  } else {
      path.push(root);
      if(constructPath(root.left, searchFor, path)) {
          return true
      } else {
          path.pop();
      };
  }
  
  return false;
}
