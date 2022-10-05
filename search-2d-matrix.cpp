#include <vector>

class Solution {
public:
    bool searchMatrix(std::vector<std::vector<int> >& matrix, int target) {
        int row = matrix.size() - 1;
        int col = 0;
        
        // left bottom corner is starting point
        while (col < matrix[0].size() && row > -1) {
            if ( matrix[row][col] == target )
                return true;
            
            if (matrix[row][col] > target) {
                row--;
            } else {
                col++;
            }
        }
        
        return false;
    }
};

