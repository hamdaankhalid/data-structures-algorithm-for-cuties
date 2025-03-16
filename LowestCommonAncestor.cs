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

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution
{
    // Post order traversal to go from bottom up
    // TC: worst case we have to walk all nodes atleast once. O(n) where n == number of nodes
    // SC: worst case we have to go to a leaf node, so depth of the tree for the recursive solution
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)
    {
        if (root == null || root == p || root == q)
            return root;

        TreeNode leftSearch = LowestCommonAncestor(root.left, p, q); 
        TreeNode rightSearch = LowestCommonAncestor(root.right, p, q); 

        // if both sides have returned the value then current node must be the result
        if (leftSearch != null && rightSearch != null)
            return root;

        return leftSearch ?? rightSearch;
    }
}