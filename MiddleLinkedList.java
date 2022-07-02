public class MiddleLinkedList {
  /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode middleNode(ListNode head) {
      int len = getLen(head);
      int midPoint = (int) Math.floor(len/2);
      ListNode mid = head;

      for(int i = 0; i < midPoint; i++) {
          mid = mid.next;
      }
      return mid;
  }
  
  private int getLen(ListNode node) {
      int len = 0;
      
      ListNode curr = node;
      
      while(curr != null) {
          curr = curr.next;
          len++;
      }
      
      return len;
  }
  
}
}
