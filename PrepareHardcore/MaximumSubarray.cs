namespace PrepareHardcore;

class MaximumSubarray {
    /*
        Largest possible sum of a sequence of consecutive values in the array.
        [1, -5, 7, 12, 43, -4]

        Subarrays include 1, -5, [1, -5], -7, [-5, -7], [1, -5, -7]
        at each point either the subarray is something that is the number itself, or includes the next one

        so at each item I need to make a decision if adding the current number will make my sum better than last best sum or not
    */
    public int MaxSum(int[] arr) {
        // accounts for the case where lets say we have the best sum start at a middle chunk and then anything further is always smaller.
        int bestSumSoFar = 0;

        // always maintains the running scenario
        int runningSum = 0;

        // start from the second index
        for (int i = 0; i < arr.Length; i++) {
            runningSum = Math.Max(arr[i], runningSum + arr[i]);
            bestSumSoFar = Math.Max(runningSum, bestSumSoFar);
        }

        return bestSumSoFar;
    }

    // The issue in the faulty code that I initially wrote is that it provides no way of leaving the best sum untouched if
    // the best sum happened in the past and we are still iterating over the nums array. 
    public int MaxSumFaulty(int[] arr) {
        int bestSum = arr[0];

        // start from the second index
        for (int i = 1; i < arr.Length; i++) {
            int candidate = arr[i];
            int potentialSum = bestSum + candidate;
            bestSum = Math.Max(potentialSum, candidate);
        }

        return bestSum;
    }

    public static void RunDemo() {
        MaximumSubarray maximumSubarray = new MaximumSubarray();

        int[] nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

        int incorrectResult = maximumSubarray.MaxSumFaulty(nums);
        int correctResult = maximumSubarray.MaxSum(nums);
    }
}