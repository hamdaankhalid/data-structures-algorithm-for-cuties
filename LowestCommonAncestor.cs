/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null)
            return null;        

        if (root == p)
            return p;
        else if (root == q)
            return q;
 
        TreeNode l = LowestCommonAncestor(root.left, p, q);
        TreeNode r = LowestCommonAncestor(root.right, p, q);

        // if both nodes are not null, just return this node
        if (l != null && r != null)
            return root; // this node is LCA
        else if (l == null)
            return r;
        else 
            return l;
    }
}