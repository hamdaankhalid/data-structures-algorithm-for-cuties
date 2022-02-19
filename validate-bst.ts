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

/*
Valid if null
otherwise check if contraints are fucked then false
else
check children
*/
function isValidBST(root: TreeNode | null, lowerLimit: number = -Infinity, upperLimit: number = Infinity): boolean {
    // console.log(root, lowerLimit, upperLimit)
    if(!root) {
        return true;
    }
    
    if((root.val <= lowerLimit) || (root.val >= upperLimit)){
        return false;   
    }
    
    // every root on left should be lesser than parent
    const leftValid = isValidBST(root.left, lowerLimit, root.val);
    
    // every root on right should be more than parent
    const rightValid = isValidBST(root.right, root.val, upperLimit);
    
    return leftValid && rightValid;
};