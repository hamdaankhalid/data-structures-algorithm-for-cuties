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
    int minDiff = INT_MAX;
    int prevVal = INT_MAX;
    
public:
    int getMinimumDifference(TreeNode* root) {
        if (!root) {
            return minDiff;    
        }

        if (root->left) {
            getMinimumDifference(root->left);
        }

        if (prevVal != INT_MAX) {
            minDiff = min(minDiff, root->val - prevVal);
        }
        prevVal = root->val;

        if (root->right) {
            getMinimumDifference(root->right);
        }

        return minDiff;
    }
};
