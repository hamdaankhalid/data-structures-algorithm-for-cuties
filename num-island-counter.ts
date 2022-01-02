/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
*/

function numIslands(grid: string[][]): number {
    let islandCounter=0;

    for(let row = 0 ; row<grid.length ; row++){
        for(let col = 0 ; col<grid[0].length ; col++){
            
            if( (grid[row][col]==="1")){
               // console.log(marked)
               grid =  dfs(grid, row, col); 
               islandCounter++;
                // console.log("*********")
            }
        }
    }
    
    return islandCounter;
};

function dfs(grid: string[][], row:number, col:number){
    const stack = [[row, col]];
    
    while(stack.length>0){
        // console.log(stack)
        let currNode = stack.pop();
        let [row, col] = currNode;
        grid[row][col] = '#'
        
        // get neighbors, if neighbors are 1's append them to stack
        let neighbors = getNeighbors(row, col, grid);
        
        for(let neighbor of neighbors){
            // console.log(neighbors, 'for', row, col)
            if(neighbor!=null){
                
                if(grid[neighbor[0]][neighbor[1]] === "1"){
                    grid[neighbor[0]][neighbor[1]] = '#';
                    stack.push(neighbor);
                }
                
            }
        }
    }
    return grid;
}


function getNeighbors(row: number, col: number, grid: string[][]): any[]{
    const up = row > 0 ? [row-1,col] : null;
    const down = row < (grid.length-1) ? [row+1, col] : null;
    
    const left = col > 0 ? [row, col-1] : null;
    const right = col < (grid[0].length-1) ?[row, col+1] : null;
    
    return [up, down, left, right];
}

/*
do multiple passes through the grid; each pass we do dfs on an unvisited node 1 and once we are
done we mark them,
then next unvisited 1 we again do dfs and increment island counter
at the end we return island counter
*/