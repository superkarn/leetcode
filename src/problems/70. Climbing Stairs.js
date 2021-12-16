// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`n         :  ${n}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = countDistinctPaths(n);
    
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
let memoization = {};
let countDistinctPaths = (n) => {
    if (n <= 2) return n;

    if (!memoization[n-1]) memoization[n-1] = countDistinctPaths(n-1);
    if (!memoization[n-2]) memoization[n-2] = countDistinctPaths(n-2);

    return memoization[n-1] + memoization[n-2];
};

//let input = 2; // 2
//let input = 3; // 3
//let input = 4; // 5
//let input = 5; // 8
//let input = 10; // 89
let input = 45; // 1836311903

let output = climbStairs(input);