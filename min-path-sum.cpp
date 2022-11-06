#include <vector>
#include <set>
#include <array>

class Solution {
public:
  /**
   * Go from top-left to bottom-right and return the min sum a path would produce
   * 
   * Naive Approach:
   * Get every single path with dfs and return the min sum
   * 
   * Smart approach is to use a memoization tactic
   * */
  int minPathSum(std::vector<std::vector<int>>& grid) {
    std::vector<int> innerRow(grid[0].size(), -1);
    std::vector<std::vector<int>> memo(grid.size(), innerRow);

    return _dfs(grid, 0, 0, memo);
  }

private:

  int _dfs(std::vector<std::vector<int>>& grid, int row, int col, std::vector<std::vector<int>>& memo) {
    if (memo[row][col] != -1) {
      return memo[row][col];
    }

    if ((row == grid.size() - 1) &&  (col == grid[0].size() - 1)) {
      return grid[row][col];
    }
    
    auto validPositions = _futurePositionsFrom(grid.size(), grid[0].size(), row, col);
    
    int minSum = 100000;
    for (auto pos: validPositions) {
      minSum = std::min( 
        minSum, 
        grid[row][col] + _dfs(grid, pos.first, pos.second, memo)
      );
    }

    memo[row][col] = minSum;
    return minSum;
  }

  std::vector<std::pair<int, int>> _futurePositionsFrom(int maxRow, int maxCol, int row, int col) {
    std::vector<std::pair<int, int>> res;

    std::vector<std::pair<int, int>>  offsetPairs = {{0, 1}, {1, 0}};

    for (auto offset: offsetPairs) {
      int newRow = offset.first + row;
      int newCol = offset.second + col;

      if (newRow < maxRow && newCol < maxCol) {
        res.push_back({newRow, newCol});
      }
    }

    return res;
  }
};

