class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> parent(numRows);
        for (int i = 0; i < numRows; i++) {
            vector<int> vec(i+1, 1);
            parent[i] = vec;
        }
        for (int j = 1; j < numRows; j++) {
            int sizeOfChild = j + 1;
            vector<int> childsFather = parent[j - 1];
            for(int k = 1; k < sizeOfChild - 1; k++) {                
                parent[j][k] = childsFather[k-1] + childsFather[k];
            }
        }
        return parent;
    }
};
