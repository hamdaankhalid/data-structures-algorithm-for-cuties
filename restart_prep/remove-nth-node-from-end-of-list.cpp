/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
      auto x = removeMeFather(head, n);

      if (x.first == 0) {
        return x.second->next == NULL ? NULL : x.second->next;
      } else {
        return x.second;
      }
    }

private:
  std::pair<int, ListNode*> removeMeFather(ListNode* curr, int ctr) {
    if (curr == NULL) {
      return {ctr, NULL};
    }

    auto currNodeFromBack = removeMeFather(curr->next, ctr);
    if (currNodeFromBack.first == 0) {
      // need to remove curr's next!
      if (currNodeFromBack.second == NULL) {
        curr->next = NULL;
      } else {
        curr->next = currNodeFromBack.second->next;
      }
    }

    return {currNodeFromBack.first - 1, curr}; 
  }
};
