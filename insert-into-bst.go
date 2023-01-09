/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func insertIntoBST(root *TreeNode, val int) *TreeNode {
	node := &TreeNode{Val: val}
	if root == nil {
		return node
	}

	var prev *TreeNode
	curr := root

	for curr != nil {
		if val < curr.Val {
			prev = curr
			curr = curr.Left
		} else {
			prev = curr
			curr = curr.Right
		}
	}

	// fmt.Println("HERE", prev)

	if val < prev.Val {
		prev.Left = node
	} else {
		prev.Right = node
	}

	return root
}
