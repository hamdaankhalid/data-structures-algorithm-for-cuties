/*
 Start traversing matrix, if we see a 1 set of a search for it's left edge, right edge, up edge, and down edge. Collect all cells that are marked as visited. If all edges are surrounded by water increment island count and continue traversing.
 Return the island count at the end lol
*/
char VISITED = '#';
class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {

      int result = 0;
      int rows = grid.size();
      int cols = grid[0].size();
      for (int row = 0; row < rows; row++) {
        for (int col = 0; col < cols; col++) {
          if (grid[row][col] == '0') {
            continue;
          }

          if (grid[row][col] == '1') {
            // mark all the land of this island as visited!
            markConnectedLandToIsland(row, col, grid);
            result += 1;
          }
        }
      }
      return result;
    }
private:
  void markConnectedLandToIsland(int row, int col, vector<vector<char>>& grid) {
    // given the rowCol mark the current cell as visited
    // see if there are any left, right, up, down paths
    // for each of those paths mark them as visited.
    grid[row][col] = VISITED;

    if (row + 1 < grid.size() && grid[row+1][col] == '1') {
      markConnectedLandToIsland(row+1, col, grid);
    }

    if (row - 1 > -1 && grid[row-1][col] == '1') { 
      markConnectedLandToIsland(row-1, col, grid);
    }

    if (col + 1 < grid[0].size() && grid[row][col+1] == '1') { 
      markConnectedLandToIsland(row, col+1, grid);
    }

    if (col - 1 > -1 && grid[row][col-1] == '1') { 
      markConnectedLandToIsland(row, col-1, grid);
    }
  }
};
