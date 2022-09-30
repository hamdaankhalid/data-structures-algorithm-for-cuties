/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    void fillVecSortedBst(TreeNode* root, std::vector<int>& sortedVec) {
        if (!root) {
            // sortedVec.push_back(0);
            return;
        };
        
        fillVecSortedBst(root->left, sortedVec);
        sortedVec.push_back(root->val);
        fillVecSortedBst(root->right, sortedVec);
    }
    
    void greaterThanSumOfVec(std::vector<int>& sortedVec) {
        int sortedVecSize = sortedVec.size();

        for (int i = sortedVecSize-2; i > -1; i--) {
            sortedVec[i] += sortedVec[i+1];
        }
    }
    
    void traverseAndFill(TreeNode* root, std::vector<int>& greaterThanSumVec) {
        if (!root) return;
        
        traverseAndFill(root->left, greaterThanSumVec);
        
        root->val = greaterThanSumVec[0];
        greaterThanSumVec.erase(greaterThanSumVec.begin());
        
        traverseAndFill(root->right, greaterThanSumVec);
    }
    
public:
    TreeNode* bstToGst(TreeNode* root) {
        // convert to sorted lnr array
        std::vector<int> myVec;
        fillVecSortedBst(root, myVec);
        
        // calc the greater than sums
        greaterThanSumOfVec(myVec);
        
        // for (int i: myVec) {
        //     std::cout << i << ", ";
        // }
        
        // do lnr traversal filling from sums
        traverseAndFill(root, myVec);
        
        return root;
    }
};
