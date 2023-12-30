public class Solution {
    public int MaxDistToClosest(int[] seats) 
    {
        int firstPartition = -1;
        int partition = 0;
        int maxPartitionSize = -1;
        
        // find all the intervals of empty spaces
        for (int i = 0; i < seats.Length; i++) {
            if (seats[i] == 1) {
                
                if (firstPartition == -1) {
                    firstPartition = i;
                }
                 
                maxPartitionSize = Math.Max(maxPartitionSize, i - partition);
                partition = i;
            }
        }
        int lastPartition = partition; 
        // edge case
        int leftMostSeat = firstPartition ;
        int rightMostSeat = seats.Length - lastPartition - 1;
       
        int result = (int)maxPartitionSize/2;
        result = Math.Max(result, leftMostSeat);
        result = Math.Max(result, rightMostSeat);
         
        return result;
    }
}
