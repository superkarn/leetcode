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
    let result = matrix;

    return result;
};

let inputs = [
    { matrix:[[1,1,1],[1,0,1],[1,1,1]], output:[[1,0,1],[0,0,0],[1,0,1]] },
    { matrix:[[0,1,2,0],[3,4,5,2],[1,3,1,5]], output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]] },
];

// Comparing array output
console.log(inputs.map(x => setZeroes(x.matrix).every((v,i) => v === x.output[i])));