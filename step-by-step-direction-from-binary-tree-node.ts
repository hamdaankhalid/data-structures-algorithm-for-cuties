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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  const leftPath = [];
  dfs(root, startValue, leftPath);
  
  const rightPath = [];
  dfs(root, destValue, rightPath);
  
  return combinePaths(leftPath, rightPath);
};

function dfs(root: TreeNode | null, search: number, runningChain: string[]) {
  if(root == null) {
      return false;
  }
  
  if (root.left) {
      runningChain.push('L');
      if (dfs(root.left, search, runningChain)) {
          return true;
      } 
      runningChain.pop();
  }
  
  if (root.val === search) {
      return true;
  }

  if (root.right) {
      runningChain.push('R');
      if (dfs(root.right, search, runningChain)) {
          return true;
      }
      runningChain.pop();
  }
  
  return false;
}

function combinePaths(leftPath: string[], rightPath: string[]) {
  let i = 0;
  
  while(leftPath[i] === rightPath[i]) {
      i++;
  }
  rightPath = rightPath.slice(i);
  for (let _ of leftPath.slice(i)) {
      rightPath.unshift("U");
  }
  return rightPath.join("");
}
