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

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;
  const nodes = [];
  let curr = dummy;
  while(curr) {
      nodes.push(curr);
      curr = curr.next;
  }
  // console.log(nodes)
  const toBeChanged = nodes[nodes.length - n];
  // console.log(toBeChanged)
  const oneBeforeChangeable = nodes[nodes.length - n - 1];
  // console.log(oneBeforeChangeable)
  oneBeforeChangeable.next = nodes[nodes.length - n + 1] || null;
  return dummy.next;
};
