// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(param1) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`param1    :  ${param1}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(param1);
    
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
let bruteForce = (param1) => {
    let result = param1;

    return result;
};

let m = 3, n = 7; // 28
//let m = 3, n = 2; // 3

let output = uniquePaths(m, n);