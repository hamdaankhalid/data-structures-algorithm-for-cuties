/*ø*
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
public class ReAddTree {
    public bool IsLeft;
    public TreeNode Parent;
    public TreeNode Subtree; 
}

public class Solution {
    public int[] TreeQueries(TreeNode root, int[] queries) 
    {
        int[] res = new int[queries.Length];
        for (int i = 0; i < queries.Length; i++) 
        {
            // remove and get subtree
            ReAddTree rmRes = this._rmSubTree(null, root, queries[i]);

            // calc height
            res[i] = this._calcHeight(root) - 1;

            // add the removed node back at remove
            if (rmRes.IsLeft) 
            {
                rmRes.Parent.left = rmRes.Subtree;
            }
            else 
            {
                rmRes.Parent.right = rmRes.Subtree;
            }
        }
        return res;
    }

    private ReAddTree _rmSubTree(TreeNode parent, TreeNode node, int val) 
    {
        if (node == null) 
        {
            return null;
        }

        if (node.val == val) 
        {
            if (parent != null && parent.left == node) 
            {
                parent.left = null;
                return new ReAddTree{IsLeft = true, Parent = parent, Subtree = node};
            }

            if (parent != null && parent.right == node) 
            {
                parent.right = null;
                return new ReAddTree{IsLeft = false, Parent = parent, Subtree = node};
            }

            return new ReAddTree{IsLeft = false, Parent = null, Subtree = node};
        }

        ReAddTree leftRes = this._rmSubTree(node, node.left, val);
        if (leftRes != null)
        {
            return leftRes;
        }

        ReAddTree rightRes = this._rmSubTree(node, node.right, val);
        if (rightRes != null)
        {
            return rightRes;
        }

        return null;
    }

    private int _calcHeight(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        return 1 + Math.Max(this._calcHeight(root.left), this._calcHeight(root.right));
    }
}
