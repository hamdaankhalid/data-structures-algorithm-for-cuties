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
public:
    bool isValidBST(TreeNode* root) {
        return recur(root, NULL, NULL);
    }

    bool recur(TreeNode* root, int lessThan, int greaterThan) {
        if (root == NULL) {
            return true;
        }

        if (lessThan != NULL && root->val >= lessThan || greaterThan!= NULL && root->val <= greaterThan) {
            return false;
        }

        return recur(root->left, root->val, greaterThan)
            &&
            recur(root->right, lessThan, root->val); 
    }
};
