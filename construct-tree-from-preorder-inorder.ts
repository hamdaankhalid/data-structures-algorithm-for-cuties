/*
Given two integer arrays preorder and inorder where preorder is the
 preorder traversal of a binary tree and inorder is the inorder traversal
 of the same tree, construct and return the binary tree
*/

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

//                  nlr                      lnr 
// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
/*
 pick root from preorder
 find left and right children in inorder
*/

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(inorder.length*preorder.length === 0){
        return null;
    }
    //console.log(preorder)

    const val = preorder.shift();
    
    const root = new TreeNode(val);
    
    const leftOfRoot = inorder.slice(0, inorder.indexOf(val));
    const rightOfRoot = inorder.slice(inorder.indexOf(val) + 1, inorder.length);
    
    //console.log(val, leftOfRoot, rightOfRoot);
    
    root.left = buildTree(preorder, leftOfRoot);
    root.right = buildTree(preorder, rightOfRoot);
    
    return root;
};