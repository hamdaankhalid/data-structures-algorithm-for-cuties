#include <vector>

class Solution {

public:
    int uniquePathsWithObstacles(std::vector<std::vector<int>>& obstacleGrid) {
      int numRows = obstacleGrid.size();
      int numCols = obstacleGrid[0].size();
    
      std::vector<int> cols(numCols+1, 0);
      std::vector<std::vector<int>> dp(numRows+1, cols);

      bool hzObstruct = false;
      for (int i = 0; i < numCols; i++) {
        if (obstacleGrid[0][i] == 1) {
            hzObstruct = true;
        }
        if (hzObstruct) {
            dp[0][i] = 0;
        } else {
            dp[0][i] = 1;
        }
      }

      bool vertObstruct = false;
      for (int i = 0; i < numRows; i++) {
        if (obstacleGrid[i][0] == 1) {
            vertObstruct = true;
        }
        if (vertObstruct) {
            dp[i][0] = 0;
        } else {
            dp[i][0] = 1;
        }
      }

    //   for (int i = 0; i < numRows; i++) {
    //       for (int j = 0; j < numCols; j++)
    //         std::cout <<dp[i][j] << " ";
    //     std::cout << "\n"; 
    //   }

      for (int row = 1; row < numRows; row++) {
        for (int col = 1; col < numCols; col++) {
          int res = 0;
          if (obstacleGrid[row][col] != 1) {
            res = dp[row-1][col] + dp[row][col-1];
          }
          dp[row][col] = res;
        }
      }

      return dp[numRows-1][numCols-1];
    }
};