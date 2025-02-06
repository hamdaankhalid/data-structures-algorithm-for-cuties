namespace PrepareHardcore;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class RangeSumBst {
    public int RangeSumBST(TreeNode root, int low, int high) {
        if (root == null)
            return 0;

        // node only contributes its sum if in range
        int nodeValForSum = root.val >= low && root.val <= high ? root.val : 0;

        if (root.left != null) {
            nodeValForSum += this.RangeSumBST(root.left, low, high);
        }

        if (root.right != null) {
            nodeValForSum += this.RangeSumBST(root.right, low, high);
        }

        return nodeValForSum;
    }
}