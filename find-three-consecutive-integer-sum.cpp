#include<vector>


class Solution {
  public:
  std::vector<long> sumOfThree(long num) {
    long left = -1;
    long right = num;
    while (left < right) {
      long mid = (left + right)/2;

      long midSum = mid-1 + mid + mid+1;
      
      if (midSum == num) {
        return {mid-1, mid, mid+1};
      }

      if (midSum < num) {
        left = mid+1;
      } else {
        right = mid;
      }
    }

    return {};
  }
};
