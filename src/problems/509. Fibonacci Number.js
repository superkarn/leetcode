// https://leetcode.com/problems/fibonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`n         :  ${n}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = recursive(n);
    
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
let recursive = (n) => {
    if (n <= 1) return n;

    if (!memoization[n-1]) memoization[n-1] = recursive(n-1);
    if (!memoization[n-2]) memoization[n-2] = recursive(n-2);

    return memoization[n-1] + memoization[n-2];
};

//let input = 2; // 1
//let input = 3; // 2
//let input = 4; // 3
//let input = 5; // 5
let input = 10; // 55
//let input = 45; // 1836311903

let output = fib(input);