/**
 * Definition for singly-linked list.
 * 
 */

struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
};



class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode dummyHead;
        ListNode* curr = &dummyHead;
        while (list1 != nullptr || list2 != nullptr) {
            if (list1 != nullptr && list2 == nullptr) {
                auto nextForRemoval = removeNodeFromChainAndAdvance(list1, curr);
                list1 = nextForRemoval;
                curr = curr->next;
            } else if (list2 != nullptr && list1 == nullptr) {
                auto nextForRemoval = removeNodeFromChainAndAdvance(list2, curr);
                list2 = nextForRemoval;
                curr = curr->next;
            } else {
                if (list1->val < list2->val) {
                    auto nextForRemoval = removeNodeFromChainAndAdvance(list1, curr);
                    list1 = nextForRemoval;
                    curr = curr->next;
                } else {
                    auto nextForRemoval = removeNodeFromChainAndAdvance(list2, curr);
                    list2 = nextForRemoval;
                    curr = curr->next;
                }
            }
            
        }
        return dummyHead.next;
    }

private:
  ListNode* removeNodeFromChainAndAdvance(ListNode* toRemoveFrom, ListNode* curr) {
    ListNode* next = toRemoveFrom->next;
    toRemoveFrom->next = nullptr;
    curr->next = toRemoveFrom;
    return next;
  }
};
