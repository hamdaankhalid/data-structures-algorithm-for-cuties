#include<vector>
#include<algorithm>
/**
  3 4 6 8
3 X 1 3 1
4 1 X 2 4
6 3 2 X 2
8 1 4 2 X
**/


/**
 * You are given nums, an array of positive integers of size 2 * n. You must perform n operations on this array.
 * In the ith operation (1-indexed), you will:
 * Choose two elements, x and y.
 * Receive a score of i * gcd(x, y).
 * Remove x and y from nums.
 * Return the maximum score you can receive after performing n operations.
 * The function gcd(x, y) is the greatest common divisor of x and y.
 **/

class Solution {

  int operation(int pos, int x, int y) {
    return pos * std::__gcd(x,y);
  }

  int dpMax(std::vector<int>& nums, int numOfOp, int runningScore, int x, int y) {
   
    if (nums.size() == 0) {
        if (x!= -1 && y!= -1){
            return runningScore + operation(numOfOp, x, y);
        }
            
        return runningScore;
    }

    int maxScore = 0;

    if (x == -1) {
        for (int i = 0; i < nums.size(); i++) {
            auto copyNums = nums;
            int newX = copyNums.at(i);
            // remove element at i
            copyNums.erase(copyNums.begin() + i);
            maxScore = std::max(maxScore, dpMax(copyNums, numOfOp, runningScore, newX, -1));
      }
    } else if (x != -1 && y != -1) {
      int newScore = runningScore + operation(numOfOp, x, y);
        
      maxScore = std::max(maxScore, dpMax(nums, numOfOp+1, newScore, -1, -1));
    } else {
      for (int i = 0; i < nums.size(); i++) {
        auto copyNums = nums;
        int newY = copyNums.at(i);
        copyNums.erase(copyNums.begin() + i);
        maxScore = std::max(maxScore, dpMax(copyNums, numOfOp, runningScore, x, newY));
      }
    }

    return maxScore;
  }

public:
    int maxScore(std::vector<int>& nums) {
      return dpMax(nums, 1, 0, -1, -1);
    }
};
