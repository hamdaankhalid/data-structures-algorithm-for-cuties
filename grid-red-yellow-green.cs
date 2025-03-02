
public class Solution {
    public int NumOfWays(int n) {
        // init grid n*3
        int[][] grid = new int[n][];
        for (int i = 0; i < n; i++)
            grid[i] = new int[3];
        
        return NumOfWays(grid, 0);
    }
    
    private int NumOfWays(int[][] grid, int pos)
    {
        if (pos >= (grid.Length * 3))
            return 1;
        
        // compute from pos
        int row = (int)Math.Floor((double)pos/3);
        int col = pos % 3;

        int numWays = 0;
        // given the current position find all the valid options we could have
        // then for each of those options apply it, and see forward, then remove the application
        // and see the next option, aggregate the numWays
        int[] opts = ValidOpts(grid, row, col);
        if (opts.Length == 0)
            return 0;
        
        foreach (int opt in opts)
        {
            grid[row][col] = opt;
            
            numWays += NumOfWays(grid, pos+1);
            
            // reset
            grid[row][col] = 0;
        }
        
        return numWays;
    }
    
    // no two cells that share vertical or horizontal sides have the same color.
    private int[] ValidOpts(int[][] grid, int row, int col)
    {
        HashSet<int> opts = new HashSet<int>{ 1, 2, 3 };
        // check left 
        if (col > 0)
            opts.Remove(grid[row][col-1]);
        
        // check right
        if (col < 2)
            opts.Remove(grid[row][col+1]);
        
        // check up 
        if (row > 0)
            opts.Remove(grid[row-1][col]);

        // check below
        if (row < (grid.Length - 1))
            opts.Remove(grid[row+1][col]);
        
        return opts.ToArray();
    }
}