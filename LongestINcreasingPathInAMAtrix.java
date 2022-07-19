public class LongestINcreasingPathInAMAtrix {
  class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        int lip = 0;
        
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {
                lip = Math.max(lip, longestFrom(row, col, matrix, 1));
            }
        }
        
        return lip;
    }
    
    /**
    * find lip from the given row, col, on matrix
    */
    public int longestFrom(int row, int col, int[][] matrix, int stepCount) {
        int maxLip = stepCount;

        List<int[]> paths = getSteps(row, col, matrix);        
        for (int[] step: paths) {
            int valueOnStep = matrix[step[0]][step[1]];
            if (valueOnStep > matrix[row][col]) {
                maxLip = Math.max(maxLip, longestFrom(step[0], step[1], matrix, stepCount+1));
            }
        }
        
        return maxLip;
    }
    
    private List<int[]> getSteps(int row, int col, int[][] matrix) {
        List<int[]> paths = new ArrayList<>();
        
        int[][] offsets = new int[][]{ new int[]{0, 1}, new int[]{0, -1}, new int[]{1, 0}, new int[]{-1, 0}};
        
        for (int[] offset: offsets) {
            int rowOffset = offset[0];
            int colOffset = offset[1];
            
            int potentialRow = row+rowOffset;
            int potentialCol = col+colOffset;

            if (potentialRow > -1 && potentialCol > -1 && potentialRow < matrix.length && potentialCol < matrix[0].length) {
                paths.add(new int[]{potentialRow, potentialCol});
            }
        }
        
        return paths;
    }
}
}
