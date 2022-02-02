// https://leetcode.com/problems/set-matrix-zeroes/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`matrix    :  ${matrix}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(matrix);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// attempt1: description on the algorithm
let bruteForce = (matrix) => {
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                //console.log(`    [${i},${j}] found 0`);

                // Set the rest of the row to 0, if it's not already 0
                setRowZero(matrix, i, j);
                setColumnZero(matrix, i, j);
            }
        }
    }

    updateMarkedCells(matrix);

    return matrix;
};
let setRowZero = (matrix, row, col) => {
    for (let j=0; j<matrix[row].length; j++) {
        if (matrix[row][j] != 0) {
            matrix[row][j] = MARK;
        }
    }
};
let setColumnZero = (matrix, row, col) => {
    for (let i=0; i<matrix.length; i++) {
        if (matrix[i][col] != 0) {
            matrix[i][col] = MARK;
        }
    }
};
let updateMarkedCells = (matrix, newMark=0) => {
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length; j++) {
            if (matrix[i][j] == MARK) {
                matrix[i][j] = newMark;
            }
        }
    }
};
// Use this to mark cells that should be turned to 0 vs started off as 0
const MARK = 'x';

// https://www.youtube.com/watch?v=T41rL0L3Pnw
let optimized = (matrix) => {

    //console.log('1 original\n'+ MatrixHelper.toString(matrix));

    let firstColumnZero = false;

    for (let r=0; r<matrix.length; r++) {
        if (matrix[r][0] == 0) {
            firstColumnZero = true;
        }
        
        for (let c=1; c<matrix[r].length; c++) {
            // If the current cell is 0, mark the first row/column
            if (matrix[r][c] == 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }
    //console.log('2 marked 1st row/col\n'+ MatrixHelper.toString(matrix));

    // Update the rows 1 -> n-1
    for (let r=1; r<matrix.length; r++) {
        if (matrix[r][0] == 0) {
            for (let c=0; c<matrix[r].length; c++) {
                matrix[r][c] = 0;
            }
        }
    }
    //console.log('3 zeroed out rows 1->n-1\n'+ MatrixHelper.toString(matrix));

    // Update the columns 1 -> n-1
    for (let c=1; c<matrix[0].length; c++) {
        if (matrix[0][c] == 0) {
            for (let r=0; r<matrix.length; r++) {
                matrix[r][c] = 0;
            }
        }
    }

    // Update the first row
    if (matrix[0][0] == 0) {
        for (let c=0; c<matrix[0].length; c++) {
            matrix[0][c] = 0;
        }
    }

    // Update the first column
    if (firstColumnZero == true) {
        for (let r=0; r<matrix.length; r++) {
            matrix[r][0] = 0;
        }
    }

    //console.log('4 zeroed out cols\n'+ MatrixHelper.toString(matrix));

    return matrix;
};
class MatrixHelper {
    // Return a human-friendly string representation of a n x m matrix
    static toString = (matrix) => {
        return matrix.reduce((prev, curr) => prev + curr + '\r\n', '');
    };
}

let inputs = [
    { matrix:[[1,1,1],[1,0,1],[1,1,1]], output:[[1,0,1],[0,0,0],[1,0,1]] },
    { matrix:[[0,1,2,0],[3,4,5,2],[1,3,1,5]], output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]] },
    { matrix:[[1,1,2,2],[3,0,0,2],[1,3,1,5]], output:[[1,0,0,2],[0,0,0,0],[1,0,0,5]] },
    { matrix:[[1,1,2,2],[0,1,1,2],[1,3,1,5]], output:[[0,1,2,2],[0,0,0,0],[0,3,1,5]] },
    { matrix:[[1,0,2,2],[1,1,1,2],[1,3,1,5]], output:[[0,0,0,0],[1,0,1,2],[1,0,1,5]] },
    { matrix:[[-1],[2],[3]], output:[[-1],[2],[3]] },
];

// Comparing 2D array output
console.log(inputs.map(x => setZeroes(x.matrix).every((v,i) => v.every((v2,i2) => v2 === x.output[i][i2]))));