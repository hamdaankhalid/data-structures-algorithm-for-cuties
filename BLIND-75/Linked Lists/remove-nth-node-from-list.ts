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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0;
  
  let purr = head;
  while(purr !== null) {
      length++;
      purr=purr.next;
  }
  
  length -= n;
  
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  while (length > 0) {
      length--;
      prev = curr;
      curr = curr.next;
  }

  prev.next = curr.next;
  
  return dummy.next;
};
