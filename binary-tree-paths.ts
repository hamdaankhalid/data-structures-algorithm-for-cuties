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

function binaryTreePaths(root: TreeNode | null): string[] {
    const res = [] as string[];
    recur(root, "", res);
    return res;
};

function recur(root: TreeNode | null, paths: string, result: string[]) {    
    paths += root.val;
    
    if ((root.left === null) && (root.right === null)) {
        result.push(paths);
        return;
    }
    
    if(root.left){
        recur(root.left, paths+"->", result);
    }
    
    if(root.right) {
        recur(root.right, paths+"->", result);
    }
}
