/*
    The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

    instead of 2d grid storing 1d list with value fo column and index as row
    left example: [1, 3, 0, 2]
    right example: [2, 0, 3, 1]

*/

function solveNQueens(n: number): string[][] {
    const solutions = [];
    const states = [];
    search(solutions, states, n);
    return solutions;
};

function search(solutions: string[][], state: number[], n: number){
    // recursively build solutions
    if(isValidState(state, n)){
        const stringState = stateToString(state, n);
        solutions.push(stringState);
    }
    
    const potentials = getPotentialStateAdditions(state, n);
    
    for(let potenialStateAddition of potentials){
        state.push(potenialStateAddition);
        search(solutions, state, n);
        state.pop();
    }
};

function getPotentialStateAdditions(state: number[], n: number){
     if(state===[]){
        return [...Array(n).keys()];
     }
    let position = state.length;
    let candidates = [...Array(n).keys()]
    // prune down
    for(let i = 0; i < n; i++){
        let row = i; //for readability
        let col = state[i];
        candidates = candidates.filter(e => e !== col);
        let dist = position - row;
        
        candidates = candidates.filter(e => e !== col + dist);
        candidates = candidates.filter(e => e !== col - dist);
    }
    
    return candidates;
    
}

function isValidState(state: number[], n: number): boolean {
    return state.length === n;
};

function stateToString(state: number[], n: number){
    //console.log(state)
    const finalAnswer = [];
    for(let col of state){
        let row = '';
        for(let i = 0; i < n; i++){
            if(i === col){
                row+='Q';
            }
            else{
                row+='.';
            }
        }
        finalAnswer.push(row);
    }
    return finalAnswer;
}
