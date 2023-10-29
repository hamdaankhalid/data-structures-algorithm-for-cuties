#include <unordered_set>

#define NULL 0

struct ListNode {
	int val;
	ListNode *next;
	ListNode(int x) : val(x), next(NULL) {}
};

// one solution is to keep a hashmap and perform a check

class Solution {
public:
	
	// fast vs slow pointer based solution
    bool hasCycle(ListNode *head) {
		ListNode* slowPtr = head;
		ListNode* fastPtr = head != NULL ? head->next : NULL;

		while (slowPtr != NULL) {
			if (slowPtr == fastPtr) {
				return true;
			}
			slowPtr = slowPtr->next;
			fastPtr = (fastPtr != NULL && fastPtr->next != NULL) ? fastPtr->next->next : NULL;
		}
		return false;
	}

    /* hashset based solution
	 * bool hasCycle(ListNode *head) {
		std::unordered_set<ListNode*> seenBefore;

		ListNode* curr = head;

		while(curr != NULL) {
			if (seenBefore.find(curr) != seenBefore.end()) {
				return true;
			}
			seenBefore.insert(curr);
			curr = curr->next;
		}
		return false;
    }
	*/
};
