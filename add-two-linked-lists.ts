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
 
    12
    99
    10 + 90 + 2 + 9
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let left = l1;
  let right = l2;
  let carryOver = 0;
  const start = new ListNode();
  let curr = new ListNode();
  start.next = curr;
  
  while(left || right) {
      const leftVal = left ? left.val : 0;
      const rightVal = right ? right.val : 0;
      
      const sumOf = leftVal+rightVal+carryOver;
      carryOver = sumOf > 9 ? 1 : 0
      const nonCarryOver = sumOf % 10;
      curr.val = nonCarryOver;
      
      
      left = left ? left.next : null;
      right = right ? right.next : null;
      if(left || right) {
          curr.next = new ListNode();
          curr = curr.next;   
      }
  };
  
  if (carryOver !== 0) {
      curr.next = new ListNode(carryOver)
  }
  
  return start.next;
};
