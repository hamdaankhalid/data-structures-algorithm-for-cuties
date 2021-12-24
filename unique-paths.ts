/*
    There is a robot on an m x n grid. The robot is initially located at the top-left corner
     (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
      The robot can only move either down or right at any point in time.

    Given the two integers m and n, return the number of possible unique paths that the robot
      can take to reach the bottom-right corner.

    The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/

function uniquePaths(m: number, n: number, memo: Map<string, number> = new Map()): number {
    if(`${m}-${n}` in memo){
        return memo[`${m}-${n}`]
    }
    
    if(m===1 || n===1){
        return 1
    }
    
    memo[`${m}-${n}`] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
    
    return memo[`${m}-${n}`] 
};
