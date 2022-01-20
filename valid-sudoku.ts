/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/
function isValidSudoku(board: string[][]): boolean {
    const rowsValid = validateRows(board);
    
    const validColumns = validateColumns(board);
    
    const validGrid = validateGrid(board);
    
    return rowsValid && validColumns && validGrid;
};

function validateRows(board: string[][]): boolean {
    for(let row=0; row<board.length; row++){
        if (hasDuplicateInArray(board[row])){
            return false;
        }
    }
    return true;
}

function validateColumns(board: string[][]): boolean {
    for(let col=0; col<board[0].length; col++) {
        let seenBefore = new Set();
        for(let row=0; row<board.length; row++){
            if(seenBefore.has(board[row][col])){
                return false;
            }
            if(board[row][col]!=="."){
                seenBefore.add(board[row][col]);
            }
        }
    }
    return true;
}

function validateGrid(board: string[][]): boolean {
    for (let lowerLimitRow=0; lowerLimitRow<board.length; lowerLimitRow+=3){       
        let upperLimitRow = lowerLimitRow+3;
        for (let lowerLimitCol = 0; lowerLimitCol<board[0].length; lowerLimitCol+=3){       
            let upperLimitCol = lowerLimitCol+3;
            let seenBefore = new Set();
            
            for(let row=lowerLimitRow; row<upperLimitRow; row++) {
                for(let col=lowerLimitCol; col<upperLimitCol; col++) {
                    if(seenBefore.has(board[row][col])) {
                        return false
                    }
                    if(board[row][col]!=".") {
                        seenBefore.add(board[row][col]);
                    }
                }   
            }
        
        }    
    }
    return true;
}

function hasDuplicateInArray(arr: string[]): boolean {
    const seenBefore = new Set();
    
    for(let i = 0; i < arr.length; i++){
        
        if(seenBefore.has(arr[i])){
            return true;
        }
        
        if(arr[i] != "."){ seenBefore.add(arr[i]); }
    }
    return false;
}
