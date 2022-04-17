def deleteNode(node):
    if not node:
        return
    
    deleteNode(node.left)
    deleteNode(node.right)

    node = None
