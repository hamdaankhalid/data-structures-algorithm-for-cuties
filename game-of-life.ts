/*
    According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

    The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

*/

/**
 Do not return anything, modify board in-place instead.
 */
type CellState = 1 | 0;

function gameOfLife(board: number[][]): void {
    const rows = board.length;
    const cols = board[0].length;

    const initialState = board.map(function(arr) { //create a copy
        return arr.slice();
    });;
    
    for(let row = 0; row < rows; row++){
        
        for(let col = 0; col < cols; col++){
            
            let neighbors = getNeighbors(initialState, row, col);
            let currState = board[row][col]
            board[row][col] = currState === 1 ? isAliveAlreadyAlive(neighbors): isAliveWasDead(neighbors);
        
        }
    }

};


function isAliveAlreadyAlive(neighbors: number[]): CellState {
    // apply business rules to retrieved neighbors
    const aliveCount = countOccurences(neighbors, 1);
    const deadCount = countOccurences(neighbors, 0);

    if((aliveCount === 2) || (aliveCount === 3)){
       return 1;
     }
    
    if( aliveCount < 2){
        return 0;
    }
    
    if(aliveCount > 3){
        return 0;
    }

    return 1;
}

function isAliveWasDead(neighbors: number[]): CellState {
    // apply business rules to retrieved neighbors
    if(countOccurences(neighbors, 1) === 3){
        return 1;
    }
    return 0;
}

function countOccurences(arr: number[], val: number): number {
    let occur = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===val){
            occur++;
        }
    }
    return occur;
}

function  getNeighbors(board: number[][], row: number, col: number): number[]{
    const colLen = board[0].length-1;
    const rowLen = board.length-1;

    const result = [];

    if((row > 0) && (col > 0)){
        result.push(board[row-1][col-1]) 
    }
    
    if(row > 0){
        result.push(board[row-1][col]);
    }

    if((row > 0) && (col<colLen)){
        result.push(board[row-1][col+1]);
    }
        
    if(col>0){
        result.push(board[row][col-1]);
    }
     if(col<colLen){
         result.push(board[row][col+1]);
    }
    
    if(row<rowLen){
        result.push(board[row+1][col]);
         if(col<colLen){
             result.push(board[row+1][col+1]);
         }
         if(col>0){
             result.push(board[row+1][col-1]);   
         }
     }
    
    return result;
}
