/*Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.
*/

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const marked = [];
    for(let row= 0; row<matrix.length; row++) {
        for(let col= 0; col<matrix[0].length; col++) {
            if (matrix[row][col] === 0){
                marked.push([row, col]);
            }
        }   
    }

    marked.forEach((coordinates) => {
        const [row, col] = coordinates;
        setColumnZeroes(matrix, col);
        setRowZeroes(matrix, row);
    });
};

function setColumnZeroes(matrix: number[][], colIndex: number): void {
    for (let i=0; i< matrix.length; i++) {
        matrix[i][colIndex] = 0;
    }
};

function setRowZeroes(matrix: number[][], rowIndex: number): void {
    matrix[rowIndex] = matrix[rowIndex].map(_ => 0);
};
