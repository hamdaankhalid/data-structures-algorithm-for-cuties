class Solution {
  public int pivotIndex(int[] nums) {
      int[] leftToRightSums = new int[nums.length];
      int[] rightToLeftSums = new int[nums.length];
      
      // build the sum left to right
      for (int i = 0; i < nums.length; i++) {
          if (i == 0) {
               leftToRightSums[i] = 0;
              
          } else {
              leftToRightSums[i] = nums[i-1] + leftToRightSums[i-1];    
          }
      }
      
      //  build the sum right to left
      for (int j = nums.length - 1; j >= 0; j--) {
          if (j == nums.length - 1) {
              rightToLeftSums[j] = 0;
          } else {
              rightToLeftSums[j] = nums[j+1] + rightToLeftSums[j+1];
          }
      }
      
      // find index where the sum of left is less than that of right starting from left to right
      for (int k = 0; k < nums.length; k++) {
          if (leftToRightSums[k] == rightToLeftSums[k]) {
              return k;
          }
      }
      
      return -1;
  }
}
