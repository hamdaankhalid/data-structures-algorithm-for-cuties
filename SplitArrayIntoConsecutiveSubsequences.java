public class SplitArrayIntoConsecutiveSubsequences {
  /**
    take first number
    drop it in a bucket
    
    create a pool with single bucket
    
    iterate over all nums starting from 1th index
    every number either fits in existing bucket, or needs a new one
    it fits in existing bucket if it is greater by 1 than the last added number by in that bucket, otherwise create a new bucket and add it to pool of buckets
    
    at the end check if all the buckets are of length 3 or more.
**/

class Solution {
  public boolean isPossible(int[] nums) {
      List<List<Integer>> pool = new ArrayList<>();
      
      List<Integer> bucket = new ArrayList<>();
      bucket.add(nums[0]);
      pool.add(bucket);
      
      for (int i = 1; i < nums.length; i++) {
          // check if there exists an appropriate bucket or we need a new one
          int appropriateBucketIdx = findAppropriateBucket(nums[i], pool);
          
          if (appropriateBucketIdx == -1) {
              List<Integer> newBucket = new ArrayList<>();
              newBucket.add(nums[i]);
              pool.add(newBucket);
          } else {
              pool.get(appropriateBucketIdx).add(nums[i]);   
          }
      }
      
      // System.out.println(pool);
      
      for(List<Integer> entries : pool) {
          if (entries.size() < 3) {
              return false;
          }
      }
      
      return true;
  }
  
  
  private int findAppropriateBucket(int val, List<List<Integer>> pool) {
      
      int smallestAppropriateBucket = -1;
      int smallestSize = 1_000_000;
      
      for (int i = 0; i < pool.size(); i++) {
          List<Integer> bucket = pool.get(i);
          
          int lastEntryInBucket = bucket.get(bucket.size() - 1);
          if (lastEntryInBucket == val-1) {
              if (smallestSize > bucket.size()) {
                  smallestSize = bucket.size();
                  smallestAppropriateBucket = i;
              }
          }
      }
      return smallestAppropriateBucket;
  }
}

}
