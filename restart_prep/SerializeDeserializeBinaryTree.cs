/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public string serialize(TreeNode root) {
        // nlr - preorder
        StringBuilder res = new StringBuilder(); 
        recurser(root, res);
        return res.ToString(); 
    }
    
    private void recurser(TreeNode root, StringBuilder res) {
        if (root == null) {
            res.Append(",*");
            return;
        }

        res.Append("," + root.val.ToString());

        recurser(root.left, res);
        recurser(root.right, res); 
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(string data) {
        string[] splitted = data.Split(',');
        int counter = 1;
        return recurdeser(splitted, ref counter);
    }

    private TreeNode recurdeser(string[] data, ref int i) {
        if (i >= data.Length) {
            return null;
        }

        if (data[i] == "*") {
           i+=1;
           return null;
        }

        int nodeval = int.Parse(data[i]);
        i += 1;

        TreeNode node = new TreeNode(nodeval);
        node.left = recurdeser(data, ref i);
        node.right = recurdeser(data, ref i);
        return node;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));
