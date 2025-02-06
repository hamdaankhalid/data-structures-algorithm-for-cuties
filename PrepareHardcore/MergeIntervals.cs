namespace  PrepareHardcore;

public class MergeSol {
    public int[][] Merge(int[][] intervals) {
        List<int[]> merged = new List<int[]>();

        // N log (N) to sort the intervals by starting index
        intervals = intervals.OrderBy(i => i[0]).ToArray();

        int i = 0;
        while (i < intervals.Length - 1) // do -1 so we can check the interval directly infront of this
        {
            // this will create a copy and we c
            int[] currentIntvl = intervals[i];
            int j = i + 1; // will always point to the interval right infront
            while (j < intervals.Length && TryMerge(currentIntvl, intervals[j]))
              j++;

            merged.Add(currentIntvl);
            i=j;
        }
        // if the last item in the array was not merged merge it explicitly
        if (i == intervals.Length - 1)
        {
            merged.Add(intervals[i]);
        }

        return merged.ToArray();
    }

    // If can merge, merge and store result in intvl1, return true
    // return false
    /*
       invtl1 = []
       intvl2 = {}

        [ {} ]
        { [] }
        [ { ] }
        { [ } ]

        now because we sort the intvl we can reduce the merging cases
        [ {} ]
        [ { ] }
        we can also know something does not need to be merged if it is of this configuration
        [] {}
    */
    private bool TryMerge(int[] intvl1, int[] intvl2)
    {
        // case: [] {}, aka we are never starting the second array before closing the last one
        if (intvl1[1] < intvl2[0])
            return false;

        intvl1[0] = Math.Min(intvl1[0], intvl2[0]);
        intvl1[1] = Math.Max(intvl1[1], intvl2[1]);

        return true;
    } 
}