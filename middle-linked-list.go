/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func middleNode(head *ListNode) *ListNode {
	res, _ := middle(head, 0)
	return res
}

func middle(node *ListNode, idx int) (*ListNode, int) {
	if node == nil {
		return nil, idx
	}

	res, totalLen := middle(node.Next, idx+1)

	if res != nil {
		return res, totalLen
	}

	if idx == totalLen/2 {
		return node, totalLen
	}

	return res, totalLen
}
