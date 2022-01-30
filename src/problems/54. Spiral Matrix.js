// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
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
    { matrix:[[1,2,3],[4,5,6],[7,8,9]], output:[1,2,3,6,9,8,7,4,5] },
    { matrix:[[1,2,3,4],[5,6,7,8],[9,10,11,12]], output:[1,2,3,4,8,12,11,10,9,5,6,7] },
];


// Comparing array output
console.log(inputs.map(x => spiralOrder(x.matrix).every((v,i) => v === x.output[i])));