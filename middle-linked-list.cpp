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

/**
 * Intuition
 * Travel till the end of the list, passing the size as param, at the end figure out mid point
 * Bubble back decrementing size, making decision whether or not we have reached middle
 * */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        auto res = middle(head, 0).first;
        midSize = 0;
        return res;
    }

private:
    int midSize = 0;

    std::pair<ListNode*, int>  middle(ListNode* curr, int llsize) {
        if (curr == nullptr) {
            midSize = llsize/2;
            return  {curr, llsize};
        }
        auto res = middle(curr->next, llsize+1);
        if (res.second == midSize) {
            return res;
        } else {
            return {curr, res.second-1};
        }
    }
};