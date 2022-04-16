let answer = [];
dfs(root, p, answer);
const target = answer.indexOf(p)+1;
return target > answer.length - 1 ? null : answer[target];  
};

function dfs(root: TreeNode | null, p: TreeNode | null, ans: TreeNode[]): void {
if(!root) {
    return;
}

dfs(root.left, p, ans);

ans.push(root);

dfs(root.right, p, ans);
}