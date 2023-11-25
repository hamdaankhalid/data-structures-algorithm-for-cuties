/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
*/
#include <iostream>
#include <string>
#include <vector>

struct TreeNode {
	int val;
	TreeNode *left;
	TreeNode *right;
	TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

// Your Codec obclass Codec {
public:

    // Encodes a tree to a single string.
	// HINT: Node, Left, Right (Pre order string)
	std::string serialize(TreeNode* root) {
		std::string data;
		recursive_ser(root, data);
		return data.substr(0, data.size() - 1);
  }

	void recursive_ser(TreeNode* root, std::string& data) {
		if (root == NULL) {
			data += "null,";
			return;
		}	

		data += std::to_string(root->val) + ",";

		recursive_ser(root->left, data);
		recursive_ser(root->right, data);
	}

	TreeNode* deserialize(std::string data) {
		return this->_deserialize(data);	
	}


    // Decodes your encoded data to tree.
    TreeNode* _deserialize(std::string& data) {
		// data is serialized in preorder manner
	
		// collect first value
		std::string int_str = "";
		int i = 0;
		while (i < data.size() && data.at(i) != ',') {
			int_str += data.at(i);
			i++;
		}
		i++;
		// now remove 0 to i
		data.erase(0, i);	
		if (int_str == "null") {
			return NULL;		
		}

		int node_val = std::stoi(int_str);			

		TreeNode* node = new TreeNode(node_val);
		node->left = this->_deserialize(data);
		node->right = this->_deserialize(data);

		return node;
    }
};
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root))
