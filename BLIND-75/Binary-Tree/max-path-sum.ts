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

function maxPathSum(root: TreeNode | null): number {
  const res =[-Infinity];
  maxPathRec(root, res);
  return res[0];
};

function maxPathRec(root: TreeNode | null, answer: number[]): number {
  if (!root) {
      return 0;
  }

  // what is the best from the left
  const leftBest = Math.max(maxPathRec(root.left, answer), 0);

  // what is the best from the right
  const rightBest = Math.max(maxPathRec(root.right, answer), 0);
  
  const priceOfNewPath = root.val + leftBest + rightBest;

  const maxSumSoFar = answer.pop();
  
  answer.push(Math.max(maxSumSoFar, priceOfNewPath));
  
  return root.val + Math.max(leftBest, rightBest);
}
