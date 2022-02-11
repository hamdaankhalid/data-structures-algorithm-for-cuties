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
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
*/
function kthSmallest(root: TreeNode | null, k: number): number {
    return inorder(root)[k-1];
};

function inorder(root: TreeNode | null) {
    if (root){
        return [...inorder(root.left) , root.val , ...inorder(root.right)]   
    }else{
        return []
    }
}

// dfs inorder and return index

