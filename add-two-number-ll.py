"""
You are given two non-empty linked lists representing two non-negative integers.
 The digits are stored in reverse order, and each of their nodes contains a single
  digit. Add the two numbers and return the sum as a linked list.
"""
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

"""
example:
2 -> 4 -> 3
5 -> 6 -> 4
7 -> 0 -> 8

342 + 465 = 807

Thought process:
start with first number while keeping track of carryover
"""
class Solution:
    
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummyHead = ListNode()
        p = l1
        q = l2
        curr = dummyHead
        carry = 0
        while p or q:
            x = p.val if p else 0
            y = q.val if q else 0
            summed = carry+x+y
            carry = 1 if summed>9 else 0
            curr.next = ListNode(summed % 10)
            curr = curr.next
            p = p.next if p else None
            q = q.next if q else None
        
        # at the end checking to make sure carry isnt 1
        if carry > 0:
            curr.next = ListNode(carry)
        
        return dummyHead.next
