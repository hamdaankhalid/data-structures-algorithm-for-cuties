public class ValidBst {
  /**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public boolean isValidBST(TreeNode root) {

      return valid(root, null, null);
  }
  
  private boolean valid(TreeNode root, Integer acceptableMax, Integer acceptableMin) {
      if (root == null ) {
          return true;
      }
      
      if ((acceptableMax != null && root.val >= acceptableMax) || (acceptableMin != null && root.val <= acceptableMin)) {
          return false;
      }
      
      return valid(root.left, root.val, acceptableMin) && valid(root.right, acceptableMax, root.val);
  }
}
}
