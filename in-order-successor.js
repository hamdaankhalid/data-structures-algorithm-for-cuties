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
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function inorderSuccessor(root, p) {
    var answer = [];
    dfs(root, p, answer);
    return answer[answer.length - 1];
}
;
function dfs(root, p, ans) {
    if (!root) {
        return;
    }
    dfs(root.left, p, ans);
    if (ans[ans.length - 1] === p) {
        ans.push(root);
        return;
    }
    ans.push(root);
    dfs(root.right, p, ans);
}
var root = new TreeNode(2);
var left = new TreeNode(1);
var right = new TreeNode(3);
root.left = left;
root.right = right;
console.log(inorderSuccessor(root, left));
