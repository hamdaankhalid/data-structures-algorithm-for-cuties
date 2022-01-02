function numIslands(grid: string[][]): number {
    const marked = [];
    let islandCounter=0;

    for(let row = 0 ; row<grid.length ; row++){
        for(let col = 0 ; col<grid[0].length ; col++){
            console.log(marked, row,col)
            if( (grid[row][col]==="1") && (!marked.includes(`${row},${col}`)) ){
                dfs(grid,row, col, marked);
                islandCounter++;
            }
        }
    }
    
    return islandCounter;
};

function dfs(grid: string[][], row:number, col:number, marked: any[]){
    const stack = [[row, col]];
    while(stack.length>0){
        let currNode = stack.pop();
        
        marked.push(`${row},${col}`);
        
        // get neighbors, if neighbors are 1's append them to stack
        let neighbors = getNeighbors(row, col, grid);
        
        for(let neighbor of neighbors){
            if(neighbor!=null){
            if((grid[neighbor[0]][neighbor[1]] === "1") && (!marked.includes(`${neighbor[0]},${neighbor[1]}`)) ){
                stack.push(neighbor);
                marked.push(`${neighbor[0]},${neighbor[1]}`)
                }
            }
        }
    }
}


function getNeighbors(row: number, col: number, grid: string[][]): any[]{
    const up = row > 0 ? [row-1,col] : null;
    const down = row < (grid.length-1) ? [row+1, col] : null;
    const left = col > 0 ? [row, col-1] : null;
    const right = col < (grid.length[0]-1) ?[row, col+1] : null;
    
    return [up, down, left, right];
}

/*
do multiple passes through the grid; each pass we do dfs on an unvisited node 1 and once we are
done we mark them,
then next unvisited 1 we again do dfs and increment island counter
at the end we return island counter
*/