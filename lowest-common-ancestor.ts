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

// get path to p
// get path to q
// get the last same one

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const leftResult = [];
    getPath(root, p, leftResult);
    const rightResult = [];
    getPath(root, q, rightResult);
    
    return lastSameNode(leftResult, rightResult);
};

function getPath(root: TreeNode | null, search: TreeNode, running: TreeNode[]) {
    if(!root) {
        return false;
    }
    
    running.push(root);
    
    if (root === search){
        return true;
    }
    
    if( getPath(root.left, search, running) || getPath(root.right, search, running)) {
        return true;
    }
    
    running.pop();
    return false;
    
}

function lastSameNode(leftPath: TreeNode[],  rightPath: TreeNode[]): TreeNode {
    let lastFound = null;
    for (let leftNode of leftPath) {
        if (rightPath.includes(leftNode)) {
            lastFound = leftNode;
        }
    }
    return lastFound;
}
