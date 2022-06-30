public class ReverseLinkedList {
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
  public ListNode reverseList(ListNode head) {
      ListNode prev = null;
      ListNode curr = head;

      while (curr != null && curr.next != null) {
          ListNode next = curr.next;
          // make curr point to prev
          curr.next = prev;
          
          // move prev curr forward
          prev = curr;
          curr = next;
      }
      
      if (curr != null) {
          curr.next = prev;    
      }
      
      return curr;
  }
}
}
