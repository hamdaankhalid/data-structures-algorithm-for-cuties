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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let l1 = list1;
  let l2 = list2;
  
  const dummyHead = new ListNode();
  let curr = dummyHead;

  while (l1 && l2) {
  
      if(l1.val <= l2.val) {
          curr.next = l1;
          l1 = l1.next;
      } else {
          curr.next = l2;
          l2 = l2.next;
      }
      
      curr = curr.next;
  }
  if (l1) {
      curr.next = l1;
  }
  
  if (l2) {
      curr.next = l2;
  }
  
  return dummyHead.next;
};
