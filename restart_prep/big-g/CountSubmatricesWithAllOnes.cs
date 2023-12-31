public class Solution {
    public int NumSubmat(int[][] mat) {
        int count = 0;
        for (int i = 0; i < mat.Length; i ++) 
        {
            for (int j = 0; j < mat[0].Length; j++)
            {
                count += this._helper(mat, i, j);
            }
        }    
        return count;
    }

    // find all rects where the top left corner of the
    // rect is at row, col
    private int _helper(int[][] mat, int row, int col) {
        int count = 0;
        int bound = mat[0].Length;
        for (int i = row; i < mat.Length; i++) {
            for (int j = col; j < bound; j++) {
                if (mat[i][j] == 1) {
                    count += 1;
                } else {
                    bound = j;
                }
            }
        }

        return count;
    }
}
