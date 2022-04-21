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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let head = new ListNode();
  let curr = head;
  
  while(lists.some(node => node !== null)) {
          curr.next = findMinNodeInList(lists);
          curr = curr.next;
  }
  

  return head.next;
};


function findMinNodeInList(lists: Array<ListNode>): ListNode {
  let minNode = new ListNode(Infinity);
  let minNodeIdx = Infinity;
  for (let nodeIdx = 0; nodeIdx < lists.length; nodeIdx++) {
      const node = lists[nodeIdx];
      if (node === null) {
          continue;
      }

      if (node.val <= minNode.val) {
          minNode = node;
          minNodeIdx = nodeIdx
      }
  }
  
  lists[minNodeIdx] = minNode.next;
  return minNode;
}
