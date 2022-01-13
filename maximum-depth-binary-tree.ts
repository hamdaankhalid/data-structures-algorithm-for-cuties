/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

 
 class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
}
 

function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    return dfs(root, 1 , -1000000);
};

function dfs(root: TreeNode | null, currDepth:number, currMax: number): number {
    if(!root){
        return Math.max(currDepth, currMax)
    }
    
    if(root.left){
        currMax = dfs(root.left, currDepth+1, currMax);
    }
    
    currMax = Math.max(currDepth, currMax);
    
    if(root.right){
        currMax = dfs(root.right, currDepth+1, currMax);
    }
    
    return currMax
}
