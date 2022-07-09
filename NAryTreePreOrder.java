public class NAryTreePreOrder {
  /*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
  public List<Integer> preorder(Node root) {
      List<Integer> preorderList = new ArrayList<>();
      build(root, preorderList);
      return preorderList;
  }
  
  private void build(Node node, List<Integer> res) {
      if (node == null) {
          return;
      }
      
      res.add(node.val);
      for(Node child: node.children) {
          build(child, res);
      }
  }
}
}
