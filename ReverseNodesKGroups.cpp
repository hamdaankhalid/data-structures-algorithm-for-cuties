class Solution 
{
public:

    ListNode* reverse(ListNode* first, ListNode* last)
    {
        ListNode* prev = nullptr;
        ListNode* end_next = last->next;
        while ( first != end_next )
        {
            auto tmp = first->next;
            first->next = prev;
            prev = first;
            first = tmp;
        }
        return last;
    }
    
    ListNode* reverseKGroup(ListNode* head, int k) 
    {
        auto node=head;
        for (int i=0; i < k - 1 && node; ++i)
        {
            node = node->next;
        }
        if(!node) return head; // the segment was shorter than k
        
        auto new_begin = node->next;
        auto new_head = reverse(head, node);
        head->next = reverseKGroup( new_begin, k);
        return new_head;
    }
};
