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
// stores A nodes and iterate through B checking A contains B
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

  const nodes = new Set();
  
  let currA = headA;
  let currB = headB;
  
  while(currA || currB) {
      if (currA) {
          if (nodes.has(currA)) {
              return currA;
          }
          nodes.add(currA);
          currA = currA.next;
      }
      
      if (currB) {
          if (nodes.has(currB)) {
              return currB;
          }
          nodes.add(currB);
          currB = currB.next;
      };
      
  }
  
  return null;
};
