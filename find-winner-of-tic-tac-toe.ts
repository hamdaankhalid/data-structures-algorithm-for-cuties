type State = "A" | "B";

function tictactoe(moves: number[][]): string {
    const board= [];
    for(let i = 0; i <3; i++) {
        board.push(['_','_','_']);
    }
    
    let player = 'A';
    for (let move of moves) {
        
        board[move[0]][move[1]] = player;
        
        const horizontalWinner = horizontalCheck(board);
        const veritcalWinner = verticalCheck(board);
        const diagonalWinner = diagonalCheck(board);
    
        if (horizontalWinner || veritcalWinner || diagonalWinner) {
            return horizontalWinner || veritcalWinner || diagonalWinner;        
        }
        
        player = player === 'A' ? 'B': 'A';
    }
    
    if (boardFull(board)) {
        return "Draw";
    }
    
    return "Pending";
};

function horizontalCheck(board: string[][]): State | null {
    
    for (let row of board) {
        
        // if the entire row is A return A
        if (row.every((i) => i === "A")) {
            return "A";
        }
        
        // if the entire row is B return B
        if (row.every((i) => i === "B")) {
            return "B";
        }
    }

    return null;
}

function verticalCheck(board: string[][]): State | null {
    for(let i = 0; i <3; i++) {
        const col = [];
        for(let j = 0; j <3; j++) {
            col.push(board[j][i]);
        }
        
        if (col.every((i) => i === "A")) {
            return "A";
        }
  
        if (col.every((i) => i === "B")) {
            return "B";
        }
        
    }
}

function diagonalCheck(board: string[][]): State | null {
    const leftToRight = [board[0][0], board[1][1], board[2][2]];
    const rightToLeft = [board[0][2], board[1][1], board[2][0]];
    
     if (leftToRight.every((i) => i === "A") || rightToLeft.every((i) => i === "A")) {
            return "A";
        }
  
    if (leftToRight.every((i) => i === "B") || rightToLeft.every((i) => i === "B")) {
        return "B";
    }
    
}

function boardFull(board: string[][]): boolean {
    return board.every( row => row.every( i => ['A', 'B'].includes(i) ));
}
