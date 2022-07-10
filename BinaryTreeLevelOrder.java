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
  public List<List<Integer>> levelOrder(TreeNode root) {
      Map<Integer, List<Integer>> intRes = new TreeMap<>();
      Queue<QueueElement> q = new LinkedList<>();
      if (root != null) {
          q.add(new QueueElement(root, 0));   
      }

      while(q.size() != 0) {
          QueueElement curr = q.remove();
          TreeNode currNode = curr.node;
          int currLevel = curr.level;

          if (!intRes.containsKey(currLevel)) {
              intRes.put(currLevel, new ArrayList<>());
          }

          if (currNode != null) {
              intRes.get(currLevel).add(currNode.val);   
          }

          if (currNode != null && currNode.left != null) {
              q.add(new QueueElement(currNode.left, currLevel+1));
          }
          
          if (currNode != null && currNode.right != null) {
              q.add(new QueueElement(currNode.right, currLevel+1));
          }
      }
      
      if (intRes.containsKey(0)) {
          return new ArrayList<>(intRes.values());
      }
      
      return new ArrayList<List<Integer>>(); 
  }
  
  private class QueueElement {
      TreeNode node;
      int level;
      
      public QueueElement(TreeNode node, int level) {
          this.node = node;
          this.level = level;
      }
  }
}