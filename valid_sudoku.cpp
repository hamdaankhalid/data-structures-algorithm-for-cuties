#include<unordered_map>
#include<string>
#include<set>
#include <vector>

using namespace std;
using namespace std;


class UniqueRangeViolationBox {
  set<int> uniqueInbox;
  
  public:

  bool insert(int i) {
    if (uniqueInbox.find(i) != uniqueInbox.end()) {
      return false;
    }
    uniqueInbox.insert(i);
    return true;
  }
};


class Solution {
  private:
    const static int BOARD_SIZE = 9;
    const static int CARTESIAN_BOX_SIZE = 3;
    const static char EMPTY = '.';
public:

    bool isValidSudoku(vector<vector<char>>& board) {
        // each row, column, and box gets their own UniqueRangeViolationBox
        // In a single iteration we will find right placement for each cell,
        // if at any point we get a violation we return false;
        UniqueRangeViolationBox littleRocker;
        vector<UniqueRangeViolationBox> rowConstraints(9, littleRocker);
        vector<UniqueRangeViolationBox> colConstraints(9, littleRocker);

        unordered_map<string, UniqueRangeViolationBox> boxConstraints;
        for (int i = 0; i < CARTESIAN_BOX_SIZE; i++) {
          for (int j = 0; j < CARTESIAN_BOX_SIZE; j++) {
            UniqueRangeViolationBox littleRockstar;
            string lookupKey = to_string(i)+","+to_string(j);
            boxConstraints[lookupKey] = littleRockstar;
          }
        }

        for (int row = 0; row < BOARD_SIZE; row++) {

            for (int col = 0; col < BOARD_SIZE; col++) { 
                if (board[row][col] == EMPTY) {
                    continue;
                }
              int cellval = board[row][col] - '0';
              bool rowSatisfied = rowConstraints.at(row).insert(cellval);
              bool colSatsified = colConstraints.at(col).insert(cellval);
              
              int transformedRow = row/CARTESIAN_BOX_SIZE;
              int transformedCol = col/CARTESIAN_BOX_SIZE;
              string lookupKey = to_string(transformedRow)+","+to_string(transformedCol);


              bool boxSatisifed = boxConstraints[lookupKey].insert(cellval);

              if (!rowSatisfied || !colSatsified || !boxSatisifed) {
                return false;
              }
            }

        }

        return true;
    }
};
