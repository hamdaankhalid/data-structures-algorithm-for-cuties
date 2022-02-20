# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.pre = None
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if root == None:
            return
        
        left = root.left
        right = root.right
        if self.pre == None:
            self.pre = root
        else:
            self.pre.right = root
            self.pre.left = None
            self.pre = root

        self.flatten(left)
        self.flatten(right)
