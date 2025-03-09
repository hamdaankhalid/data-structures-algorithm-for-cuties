using System;
using System.Collections.Generic;

// To execute C#, please define "static void Main" on a class
// named Solution.

/*
Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands*.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



Input: grid = [
  ["1","1","1"],
  ["1","1","0"],
  ["1","1","0"],
  ["0","0","0"]
]
Output: 1

Input: grid = [
  ["1","0","0"],
  ["1","0","0"],
  ["0","1","0"],
  ["0","0","1"]
]
Output: 3

*/

class Solution
{
    static void Main(string[] args)
    {
        for (var i = 0; i < 5; i++)
        {
            Console.WriteLine("Hello, World");
        }
    }
/*

Input: grid = [
  ["1","0"],
  ["1","0"],
  ["0","1"],
]
Output: 2
*/
    static readonly int VisitedMoniker = -1;
    static int NumIslands(int[][] grid)
    {
        int numIslands = 0;
        for (int row = 0; row < grid.Length; row++)
        {
            for (int col = 0; col < grid[0].Length; col++)
            {
                int cell = grid[row][col];
                if (cell == 0 || cell == VisitedMoniker)
                    continue; 

                // we have enountered a piece of land that we have never seen before
                numIslands++;
                MarkViaDfs(row, col, grid); 
            }
        }
        return numIslands;
    }


    /*
    [
    ]
    pop - > 0, 0

    */
    static void MarkViaDfs(int row, int col, int[][]grid)
    {
        Stack<(int, int)> stack = new Stack<(int, int)>();
        stack.Push((row, col));
        while (stack.Count != 0)
        {
            (int currRow, int currCol) = stack.Pop();

            // Mark phase
            grid[currRow][currCol] = VisitedMoniker;

            // find the neighbors that are paths to a bigger island
            // left, right, above, and below
            Tuple<int, int>[] offsets = new Tuple<int, int>[]{
                new Tuple<int, int>(0, -1),
                new Tuple<int, int>(0, 1),
                new Tuple<int, int>(-1, 0), // above
                new Tuple<int, int>(1, 0),
            };

            foreach (var offset in offsets) 
            {
                int newRow = currRow + offset.Item1;
                int newCol = currCol + offset.Item2;

                if (newRow < 0 || newRow > grid.Length - 1 || newCol < 0 || newCol > grid[0].Length - 1)
                    continue;
                
                if (grid[newRow][newCol] == 0 || grid[newRow][newCol] == VisitedMoniker)
                    continue;
                
                stack.Push((newRow, newCol));
            }
        }
    }


/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]

Option 1 => nLog(n) + n => O(nLog(n))
- Sort (nLog(n)) 
- Iterate n

Option 2 => n * log(n) => O(n(log(n)))
- Iterate (n)
    - (insertion sort) (log(n))
*/

    static (int, int)[] MergeIntervals((int, int)[] intervals)
    {
        // sorted and merged
        List<(int, int)> result = new List<(int, int)>();

        foreach (var interval in intervals)
        {
            // Find the spot inside of result to insert at using Binary Search 
            int target = interval.Item1;
            int left = 0;
            int right = intervals.Length - 1;
            while (left < right)
            {
                int middle = (right + left)/2;

                int middleVal = result[middle].Item1;

                if (target == middle)
                {
                    left = middle;
                    break;
                }
                else if (target < middle)
                    right = middle - 1;
                else
                    left = middle + 1;
            }
            // insertion is at left
            if (left == 0)
            {
                result.Insert(0, (interval));
            }
            else if (left == result.Count)
            {
                result.Add(interval);
            }
            else
            {
                result.Insert(left, (interval));
            }
            // --------
            
            // check thy neighbors
            if (left == 0)
            {
                MaybeMerge(left, false, true, result);
            }
            else if (left == result.Count - 1)
            {
                MaybeMerge(left, true, false, result);
            }
            else 
            {
                MaybeMerge(left, true, true, result);
            }
        }

        return result.ToArray();
    }

    // Given the index, and whether to check left neighbor, check right neighbor, and result. Maybe merge the index against them
    private static void MaybeMerge(int insertedAt, bool checkLeft, bool checkRight, List<(int, int)> result)
    {
        bool mergedLeft = false;
    
        (int, int) insertedInterval = result[insertedAt];
        if (checkLeft)
        {
            (int, int) leftNeighbor = result[insertedAt - 1];

            // intvl 1 left [] intvl2  right ()
            // Invariant [ <= (
            // [( )]
            // [( ])
            if (insertedInterval.Item1 <= leftNeighbor.Item2)
            {
                leftNeighbor.Item1 = Math.Min(insertedInterval.Item1, leftNeighbor.Item1);
                leftNeighbor.Item2 = Math.Min(insertedInterval.Item2, leftNeighbor.Item2);
                result.RemoveAt(insertedAt);
                insertedInterval = leftNeighbor;
                mergedLeft = true;
            }
        }

        if (checkRight)
        {
            int rightNeighborIdx = mergedLeft ? insertedAt : insertedAt - 1; 
            (int, int) rightNeighbor = result[rightNeighborIdx];
            
            if (rightNeighbor.Item1 <= insertedInterval.Item2)
            {
                rightNeighbor.Item1 = Math.Min(insertedInterval.Item1, rightNeighbor.Item1);
                rightNeighbor.Item2 = Math.Min(insertedInterval.Item2, rightNeighbor.Item2);
                result.RemoveAt(rightNeighborIdx);
            }
        }
    }

}
