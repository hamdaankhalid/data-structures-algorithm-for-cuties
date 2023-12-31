public class Solution {
    public int MaxIncreasingCells(int[][] mat) 
    {
        int max = 0;
        Dictionary<Tuple<int, int>, int> memo = new Dictionary<Tuple<int, int>, int>();
        for (int i = 0; i < mat.Length; i++) {
            for (int j = 0; j < mat[0].Length; j++) {
                max = Math.Max(max, this._maxFrom(mat, i, j, memo));
            }
        }
        return max;
    }

    private int _maxFrom(int[][] mat, int row, int col, Dictionary<Tuple<int, int>, int> memo) {
        Tuple<int, int> memoKey = new Tuple<int, int>(row, col);

        if (memo.ContainsKey(memoKey)) {
            return 1 + memo[memoKey];
        }

        int max = 0;
        int currValue = mat[row][col];
        // check the rows
        for (int i = 0; i < mat.Length; i++) {
            if (currValue > mat[i][col]) {
                max = Math.Max(max, this._maxFrom(mat, i, col, memo));
            }
        }
        // check the cols
        for (int i = 0; i < mat[0].Length; i++) {
            if (currValue > mat[row][i]) {
                max = Math.Max(max, this._maxFrom(mat, row, i, memo));
            }
        }

        memo[memoKey] = max;
        return max + 1;
    }
}
