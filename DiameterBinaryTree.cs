/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    private int maxWidth;

    public int DiameterOfBinaryTree(TreeNode root) {
        maxWidth = 0;
        Recurse(root);
        return maxWidth;
    }

    private int Recurse(TreeNode root)
    {
        // bottom of tree
        if (root == null)
            return 0;
        
        // the distance between the left and right nodes from this guy
        int leftResult = Recurse(root.left);
        int rightResult = Recurse(root.right);

        // include this left and right in calculation of maxWidth
        maxWidth = Math.Max(maxWidth, leftResult + rightResult);

        // return the longest leg we had of left or right + this node
        return 1+ Math.Max(leftResult, rightResult);
    }
}