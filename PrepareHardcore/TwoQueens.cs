namespace PrepareHardcore;

class TwoQueens
{
    // Count the number of ways to place 2 queens on an N x N board such that they cannot attack each other
    int TwoQueensFirst(int n)
    {
        int totalCombinations = 0;

        // Iterate over all possible positions for the first queen
        for (int row1 = 0; row1 < n; row1++)
        {
            for (int col1 = 0; col1 < n; col1++)
            {
                // Calculate attackable positions for the first queen
                int attackableSpots = CalculateAttackableSpots(n, row1, col1);

                // Total spots minus 1 (occupied by the first queen) and minus attackable spots
                int nonAttackingSpots = n * n - 1 - attackableSpots;

                totalCombinations += nonAttackingSpots;
            }
        }

        // Each pair is counted twice (A, B and B, A), so divide by 2
        return totalCombinations / 2;
    }

    // Calculate the number of attackable spots from (row, col)
    private int CalculateAttackableSpots(int n, int row, int col)
    {
        // Spots in the same row and column
        int rowAndColumnSpots = 2 * (n - 1);

        // Spots in the diagonals
        int diagonalSpots = CountDiagonalSpots(n, row, col);

        return rowAndColumnSpots + diagonalSpots;
    }

    // Count the number of diagonal spots attackable by a queen at (row, col)
    private int CountDiagonalSpots(int n, int row, int col)
    {
        // Upper-left diagonal
        int upperLeft = Math.Min(row, col);

        // Upper-right diagonal
        int upperRight = Math.Min(row, n - col - 1);

        // Bottom-left diagonal
        int bottomLeft = Math.Min(n - row - 1, col);

        // Bottom-right diagonal
        int bottomRight = Math.Min(n - row - 1, n - col - 1);

        // Total diagonal spots
        return upperLeft + upperRight + bottomLeft + bottomRight;
    }

    public static void RunDemo()
    {
        TwoQueens tq = new TwoQueens();
        for (int i = 1; i < 11; i++)
        {
            Console.WriteLine($"{i} x {i} board: {tq.TwoQueensFirst(i)} ways");
        }
    }
}
