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

// struct TreeNode {
//   int val;
//   TreeNode *left;
//   TreeNode *right;
//   TreeNode() : val(0), left(nullptr), right(nullptr) {}
//   TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
//   TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
// };

// Input: traversal = "1-2--3--4-5--6--7"
// Output: [1,2,5,3,4,6,7]
class Solution {
  
  int separatorLen(std::string& traversal) { 
    if (traversal.size() == 0) return -1;
    int currSeparatorLen = 0;
    while (traversal[currSeparatorLen] == '-') currSeparatorLen++;
    return currSeparatorLen;
  }

  TreeNode* recurBuild(int prevSeparatorLen, std::string& traversal) {
    int currSeparatorLen = separatorLen(traversal);
    if (currSeparatorLen == -1) 
        return nullptr;
      
    if (currSeparatorLen <= prevSeparatorLen) 
        return nullptr;
      
    for (int i = 0; i < currSeparatorLen; i++) 
      traversal.erase(traversal.begin());
    
    int currIntIterator = 0;
    string intAsStr = "";
    while (isdigit(traversal[currIntIterator])) {
        intAsStr += traversal[currIntIterator];
        currIntIterator++;
    }

    int val = stoi(intAsStr); // remove the int from the string
    for (int j = 0; j<currIntIterator; j++) traversal.erase(traversal.begin());
    
    TreeNode* tn = new TreeNode(val);
    tn->left = recurBuild(currSeparatorLen, traversal);
    tn->right = recurBuild(currSeparatorLen, traversal);
    return tn;
  }
    
public:
  TreeNode* recoverFromPreorder(std::string traversal) {
    return recurBuild(-1, traversal);
  }
};