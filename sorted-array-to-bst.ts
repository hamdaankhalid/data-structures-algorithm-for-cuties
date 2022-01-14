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
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

// middle is root
// left from middle is root's left chil, and right is right child

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if(nums.length === 1){
        return new TreeNode(nums[0]);
    }
    
    // find root
    const midPoint = Math.floor(nums.length/2);
    
    const rootNode = new TreeNode(nums[midPoint]);

    // left
    const leftArray = nums.slice(0, midPoint);
    
    if(leftArray.length>0){
        rootNode.left = sortedArrayToBST(leftArray);
    }
    
    const rightArray = nums.slice(midPoint+1, nums.length);
    
    if(rightArray.length>0){
        rootNode.right = sortedArrayToBST(rightArray);
    }
    
    return rootNode;
};
