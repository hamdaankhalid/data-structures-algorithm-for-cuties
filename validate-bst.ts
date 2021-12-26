function isValidBST(root: TreeNode | null, low: number = -Infinity, high: number = Infinity): boolean {
    if(root == null){
        return true
    }
    
    if( (root.val <= low) || (root.val >= high)){
        return false
    }
    
    // every node on left must be lower than the node
    const isLeftValid = isValidBST(root.left, low, root.val);
    // every node on right must be higher than the node
    const isRightValid = isValidBST(root.right, root.val, high);

    return isLeftValid && isRightValid;
};

