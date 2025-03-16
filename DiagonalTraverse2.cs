public class Solution {
    // TILT the triangle like a diamond and traverse level by level (BFS using Queue)
    public int[] FindDiagonalOrder(IList<IList<int>> nums)
    {
        List<int> result = new List<int>();
        // Level order traversal of the nums tilted and made into a binary tree.
        Queue<(int, int)> queue = new Queue<(int, int)>();
        queue.Enqueue((0, 0));

        while (queue.Count > 0)
        {
            (int currNodeRow, int currNodeCol) = queue.Dequeue();

            result.Add(nums[currNodeRow][currNodeCol]);

            // if this is the left most node in the level we want to add it's left child
            if (currNodeCol == 0)
            {
                // if the left child is in range
                if (currNodeRow + 1 < nums.Count)
                    queue.Enqueue((currNodeRow + 1, currNodeCol));
            }

            // enqueue the right child if any, right child is right next to it
            if (currNodeCol + 1 < nums[currNodeRow].Count)
            {
                queue.Enqueue((currNodeRow, currNodeCol + 1));
            }
        }

        return result.ToArray();
    }

    public int[] FindDiagonalOrderMyAlgo(IList<IList<int>> nums) {
        /*
        O(m*n) + O(m*n)
        Walk the L shaped pattern at each point traversing to top right till we hit a boundary
        for each row keep a marker of how far we have traversed it to
        */
        int maxLenOfRow = -1;
        List<int> result = new List<int>();
        int[] rowWalkedTill = new int[nums.Count]; // all 0's because value type


        // walk down the L, traverse top half
        for (int row = 0; row < nums.Count; row++) 
        {
            // traverse to top right corner till we hit a boundary
            for (int walkRightUp = row; walkRightUp > -1; walkRightUp--)
            {
                IList<int> rowInQuestion = nums[walkRightUp];
                maxLenOfRow = Math.Max(maxLenOfRow, rowInQuestion.Count);
                int howFarDidPreviousCallWalkThisRow = rowWalkedTill[walkRightUp];
                // if we have already walked this row in the previous calls look at the row above
                if (howFarDidPreviousCallWalkThisRow >= rowInQuestion.Count)
                    continue;
                result.Add(rowInQuestion[howFarDidPreviousCallWalkThisRow]);
                // now we have walked this row one col further
                rowWalkedTill[walkRightUp]++;
                // mark this so our L Walk's right side walk is simplified
                nums[walkRightUp][howFarDidPreviousCallWalkThisRow] = int.MinValue;
            } 
        }
    
        // walk the right part of the L while traversing upwards, traverse the bottom half of the grid
        for (int rowIdx = nums.Count - 1; rowIdx > -1; rowIdx--)
        {
            IList<int> currentRow = nums[rowIdx];
            int startingCol = rowWalkedTill[rowIdx];
    
            for (int col = startingCol; col < currentRow.Count; col++) 
            {
                // walk towards up right diagonally
                for (int walkRightUp = rowIdx; walkRightUp > -1; walkRightUp--)
                {
                    IList<int> rowInQuestion = nums[walkRightUp];
                    int howFarDidPreviousCallWalkThisRow = rowWalkedTill[walkRightUp];
                    // if we have already walked this row in the previous calls look at the row above
                    if (howFarDidPreviousCallWalkThisRow >= rowInQuestion.Count)
                        continue;

                    result.Add(rowInQuestion[howFarDidPreviousCallWalkThisRow]);
                    // now we have walked this row one col further
                    rowWalkedTill[walkRightUp]++;
                    // mark this so our L Walk's right side walk is simplified
                    // we dont need to do this here because we will never visit it
                    // nums[walkRightUp][howFarDidPreviousCallWalkThisRow] = int.MinValue;
                } 
            }
        }

        return result.ToArray();
    }
}