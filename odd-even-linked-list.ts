/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
      return null;
  }
  
  let oddNode = head; // the first node is odd always we will keep updating this
  let evenNode = head.next; // head.next is even || null
  let evenHeadNode = evenNode; // we will not update this and use this as a pointer to join odd and even parts of the LinkedList at the end
  
  // `even !== null` rules out the list of only 1 node
  // `even.next !== null` rules out the list of only 2 nodes
  while (evenNode && evenNode.next) {
      // odd should skip one over and point to next's next
      oddNode.next = oddNode.next.next;
      
      // even should skip one over and point to next's next
      evenNode.next = evenNode.next.next;
      
      // move pointer to next odd or even
      oddNode = oddNode.next; // line 25^
      evenNode = evenNode.next // line 28^
  } 

  oddNode.next = evenHeadNode;
  return head;
};
