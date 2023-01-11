package dsa_but_make_it_classy

type Node struct {
	Val       int
	Neighbors []*Node
}

func cloneGraph(node *Node) *Node {
	if node == nil {
		return nil
	}

	mapping := make(map[int]*Node)

	clone(node, mapping)

	return mapping[node.Val]
}

// DFS through graph create a clone of the current node or pick it up from mapping if it already exists
// iterate through nodes neighbors and if we havent already made a clone that neighbor clone it otherwise
// attach the precloned object to it
func clone(node *Node, mapping map[int]*Node) *Node {
	if node == nil {
		return nil
	}

	if _, exists := mapping[node.Val]; !exists {
		mapping[node.Val] = &Node{Val: node.Val}
	}

	clonedNode := mapping[node.Val]

	for _, option := range node.Neighbors {
		if premapped, exists := mapping[option.Val]; exists {
			clonedNode.Neighbors = append(clonedNode.Neighbors, premapped)
		} else {
			clonedNeighbor := clone(option, mapping)
			clonedNode.Neighbors = append(clonedNode.Neighbors, clonedNeighbor)
		}
	}

	return clonedNode
}
