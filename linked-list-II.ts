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
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

7 -> 2 -> 4 -> 3
5 -> 6 -> 4
*/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const num1 = mapNodeToList(l1);
  const num3 = mapNodeToList(l2);
  
  return mapIntToNode(num1+num3);
};

function mapNodeToList(node: ListNode | null, ) {
  let curr = node;
  const digits = [];
  while (curr) {
      digits.push(curr);
      curr = curr.next;
  }
  
  return Number(digits.join(""));
}


function mapIntToNode(digits) {
  const stringified = String(digits);
  
  const dummyHead = new Node('-1');
  const currentNode = dummyHead;
  for(let i of stringified) {
      const node =. new Node(Number(i));
      currentNode.next = node;
      currentNode = node;
  }
  
  return dummyHead.next;
}
