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
    let result = matrixRotation(matrix);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Take the first row, rotate the matrix counter clock wise, repeat.
// https://leetcode.com/problems/spiral-matrix/discuss/20571/1-liner-in-Python-%2B-Ruby
let matrixRotation = (matrix) => {
    //console.log(MatrixHelper.toString(matrix));
    let result = matrix.shift();

    if (matrix && matrix.length > 0) {
        matrix = MatrixHelper.rotateCounterClockWise(matrix);
        result.push(...matrixRotation(matrix));
    }
    
    return result;
};
class MatrixHelper {
    // Return a human-friendly string representation of a n x m matrix
    static toString = (matrix) => {
        return matrix.reduce((prev, curr) => prev + curr + '\r\n', '');
    };

    // https://stackoverflow.com/a/58668351/1398750
    static rotateClockWise = (matrix) => {
        return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
    };

    // https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript#comment125372282_58668351
    static rotateCounterClockWise = (matrix) => {
        return matrix[0].map((val, index) => matrix.map(row => row[row.length-1-index]));
    };
}

let inputs = [
    { matrix:[[1,2,3],[4,5,6],[7,8,9]], output:[1,2,3,6,9,8,7,4,5] },
    { matrix:[[1,2,3,4],[5,6,7,8],[9,10,11,12]], output:[1,2,3,4,8,12,11,10,9,5,6,7] },
];


// Comparing array output
console.log(inputs.map(x => spiralOrder(x.matrix).every((v,i) => v === x.output[i])));