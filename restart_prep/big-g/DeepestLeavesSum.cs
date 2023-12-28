**
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
    public int DeepestLeavesSum(TreeNode root) {
        Queue<Tuple<TreeNode, int>> queue = new Queue<Tuple<TreeNode, int>>(); 
        queue.Enqueue(new Tuple<TreeNode, int>(root, 0));
        
        int maxLevel = -1;
        Dictionary<int, int> levelSum = new Dictionary<int, int>();
        
        while (queue.Count > 0) {
            
            Tuple<TreeNode, int> curr = queue.Dequeue();
            
            if (!levelSum.ContainsKey(curr.Item2)) {
                levelSum[curr.Item2] = 0;
            }
            
            levelSum[curr.Item2] += curr.Item1.val; 
            
            maxLevel = Math.Max(maxLevel, curr.Item2);

            if (curr.Item1.left != null) {
                queue.Enqueue(new Tuple<TreeNode, int>(curr.Item1.left, curr.Item2 + 1)); 
            } 
            
            if (curr.Item1.right != null) {
                queue.Enqueue(new Tuple<TreeNode, int>(curr.Item1.right, curr.Item2 + 1)); 
            }
        }
        
        return levelSum[maxLevel];
    }
}
