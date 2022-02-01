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

let inputs = [
    { matrix:[[1,1,1],[1,0,1],[1,1,1]], output:[[1,0,1],[0,0,0],[1,0,1]] },
    { matrix:[[0,1,2,0],[3,4,5,2],[1,3,1,5]], output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]] },
    { matrix:[[-1],[2],[3]], output:[[-1],[2],[3]] },
];

// Comparing 2D array output
console.log(inputs.map(x => setZeroes(x.matrix).every((v,i) => v.every((v2,i2) => v2 === x.output[i][i2]))));