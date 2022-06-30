public class MergeTwoSortedLists {
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
  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
      ListNode head = new ListNode();
      ListNode curr = head;
      
      ListNode node1 = list1;
      ListNode node2 = list2;
      
      while (node1 != null || node2 != null) {
          if (node1 != null && node2 !=null ) {
              if (node1.val < node2.val) {
                  curr.next = node1;
                  node1 = node1.next;
              } else {
                  curr.next = node2;
                  node2 = node2.next;
              }
          } else if (node1 != null) {
              curr.next = node1;
              node1 = node1.next;
          } else {
              //node2 is not null but node1 is
              curr.next = node2;
              node2 = node2.next;
          }
          curr = curr.next;
      }
      
      return head.next;
  }
}
}
