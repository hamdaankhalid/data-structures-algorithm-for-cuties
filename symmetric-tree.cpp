class Solution {
    void invert(TreeNode* root) {
        if (!root) {
            return;
        }
        TreeNode* temp = root->right;
        root->right = root->left;
        root->left = temp;

        invert(root->right);
        invert(root->left);
    }
    
    bool equal(TreeNode* one, TreeNode* two) {
        if (!one && !two) {
            return true;
        }
        
        if ((!one && two) || (one && !two)){
            return false;
        }
        
        if (one->val != two->val) {
            return false;
        }
        
        return equal(one->right, two->right) && equal(one->left, two->left);
    }
    
public:
    bool isSymmetric(TreeNode* root) {
        if (!root)
            return true;
        
        // invert right subtree and check if 2 trees are equal 
        invert(root->right);
        return equal(root->left, root->right);
    }
};
