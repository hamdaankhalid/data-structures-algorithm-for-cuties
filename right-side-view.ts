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

function rightSideView(root: TreeNode | null): number[] {
  const q : any[][]= [[root, 0]];
  const ans = {};
  let levels = 0;
  
  while(q.length > 0){
      const first = q.shift();
      const currNode = first[0];
      const currLevel: number = first[1] as number;
      
      if (currLevel in ans) {
          ans[currLevel].push(currNode.val);
      } else {
          ans[currLevel] = [currNode.val];
      }
      
      if(currNode.left!==null){
          q.push([root.left, levels+1]);
      }
      
      if(currNode.right!==null){
          q.push([root.right, levels+1]);
      }
      
      if(currNode.left !==null || currNode.right!==null){
          levels++;
      }
  }
  
  const result = [];
  for(let i = 0; i <= levels; i++) {
      result.push(ans[i][-1]);
  }
  return result;
};
