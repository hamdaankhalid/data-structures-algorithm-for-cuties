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

function isSymmetric(root: TreeNode | null): boolean {
    return check(root.left, root.right);
};

function check(left: TreeNode | null, right: TreeNode | null): boolean{
    if(!left && !right){
        return true;
    }
    
    if((left && !right) || (right && !left)){
        return false;
    }
    
    return (
        (left.val === right.val)
        && check(left.left, right.right)
        && check(left.right, right.left)
    );
}