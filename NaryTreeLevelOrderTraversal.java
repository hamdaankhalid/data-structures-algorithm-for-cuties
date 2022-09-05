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

class QueueNode {
  Node node;
  int level;
  
  QueueNode(Node node, int level) {
      this.node = node;
      this.level = level;
  }
}
class NaryTreeLEvelOrderTraversal {
  public List<List<Integer>> levelOrder(Node root) {
      
      Map<Integer, List<Integer>> levelToValsMapping = new HashMap<>();
      int levelMax = 0;
      List<List<Integer>> result = new ArrayList<List<Integer>>();
      if (root == null) {
          return result;
      }
      
      Queue<QueueNode> q = new LinkedList<QueueNode>();
      QueueNode start = new QueueNode(root, 0);
      q.add(start);
      
      while (!q.isEmpty()) {
          QueueNode curr = q.poll();
          int currNodeLevel = curr.level;
          int currNodeVal = curr.node.val;
          levelMax = currNodeLevel;
          
          if (!levelToValsMapping.containsKey(currNodeLevel)) {
              levelToValsMapping.put(currNodeLevel, new ArrayList<Integer>());
          }
          levelToValsMapping.get(currNodeLevel).add(currNodeVal);
          for(Node children : curr.node.children) {
              q.add(new QueueNode(children, currNodeLevel+1));
          }
      }
      // System.out.println(levelMax);
      for (int i = 0; i <= levelMax; i++) {
          result.add(levelToValsMapping.get(i));
      }
      
      return result;
  }
}
