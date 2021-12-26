class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode | null, inorder: any[] = []): number[] {
    // lnr
    if (!root) {
        return inorder
    }

    inorderTraversal(root.left, inorder);

    inorder.push(root.val);

    inorderTraversal(root.right, inorder);

    return inorder;
};
