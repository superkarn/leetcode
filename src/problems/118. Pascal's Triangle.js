// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`numRows   :  ${numRows}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(numRows);
    
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
let bruteForce = (numRows) => {
    let result = [[]];

    return result;
};

let inputs = [
    { numRows:5, output:[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] },
    { numRows:1, output:[[1]] },
];

// Comparing 2D array output
console.log(inputs.map(x => {
    let results = generate(x.matrix)
    if (x.output.length != results.length) return false;

    return results.every((v,i) => {
        if (v.length != x.output[i].length) return false;
        return v.every((v2,i2) => v2 === x.output[i][i2])
    });
}));
