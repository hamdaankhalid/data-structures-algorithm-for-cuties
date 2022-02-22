"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

# function cloneGraph(node: Node | null, head: Node | null = null): Node | null {
#     if (!head) {
#         head = node;
#     }
    
#     if (!node) {
#         return head;
#     }
    
#     const curr = new Node();
#     curr.val = node.val;
    
#     for (let neighbor of node.neighbors) {
#         const neighborNode = cloneGraph(neighbor, head);
#         curr.neighbors.push(neighborNode);
#     }
#     // console.log(curr);
#     return curr;
# };
class Solution:
    def __init__(self):
        self.mapping = {}
        
    def cloneGraph(self, node: 'Node', head = None) -> 'Node':
        if not head:
            head = node
        
        if not node:
            self.mapping = []
            return head
        
        curr = Node(node.val)
        self.mapping[node] = curr
        for neighbor in node.neighbors:
            
            if neighbor not in self.mapping:
                neighborNode = self.cloneGraph(neighbor, head)
                curr.neighbors.append(neighborNode)
           
            if self.mapping[neighbor] not in self.mapping[node].neighbors:
                self.mapping[node].neighbors += [self.mapping[neighbor]]
                
        return curr
