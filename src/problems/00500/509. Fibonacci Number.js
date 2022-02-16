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

let inputs = [
    { n:2, output:1 },
    { n:3, output:2 },
    { n:4, output:3 },
    { n:5, output:5 },
    { n:10, output:55 },
    { n:20, output:6765 },
    { n:30, output:832040 },
    { n:40, output:102334155 },
    { n:45, output:1134903170 },
];

// Comparing scalar output
console.log(inputs.map(x => fib(x.n) == x.output));