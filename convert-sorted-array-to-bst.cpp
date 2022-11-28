#include <vector>

struct TreeNode {
      int val;
      TreeNode *left;
      TreeNode *right;
      TreeNode() : val(0), left(nullptr), right(nullptr) {}
      TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
      TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};


class Solution {

public:
    TreeNode* sortedArrayToBST(std::vector<int>& nums) {
      return sortedArrayToBSTHelper(nums, 0, nums.size());
    }

private:
    TreeNode* sortedArrayToBSTHelper(std::vector<int>& nums, int beginIdx, int endIdx) {
      if (endIdx - beginIdx == 0) {
        return nullptr;
      }

      // Get the midpoint of nums
      int midIdx = (endIdx + beginIdx)/2;
      TreeNode* parent = new TreeNode(nums.at(midIdx));
      parent->left = sortedArrayToBSTHelper(nums, beginIdx, midIdx);
      parent->right = sortedArrayToBSTHelper(nums, midIdx+1, endIdx);

      return parent;
    }
};
