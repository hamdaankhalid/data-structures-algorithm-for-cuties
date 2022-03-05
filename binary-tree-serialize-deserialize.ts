/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildPreorder(root: TreeNode | null, running: string[]) {
  if(root === null){
      running.push("*");
      return;
  }

  running.push(String(root.val));

  buildPreorder(root.left, running);
  buildPreorder(root.right, running);
}

/*
* Encodes a tree to a single string.
*/
function serialize(root: TreeNode | null): string {
  const serialized = [];
  buildPreorder(root, serialized);
  const joined = serialized.join(",");
  return joined;
};

/*
* Decodes your encoded data to tree.
*/
function deserialize(data: string): TreeNode | null {
  const q = data.split(",");
  return helper(q);
};

function helper(dataQueue): TreeNode | null {
  if(dataQueue.length === 0){
      return null;
  }
  
  // take the first element this is your node!
  const top = dataQueue.splice(0, 1)[0];
  
  if(top === "*") {
      return null;
  }
  
  const head = new TreeNode(Number(top));

  head.left = helper(dataQueue);
  head.right = helper(dataQueue);
  
  return head;
}

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
