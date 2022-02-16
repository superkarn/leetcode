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
    let result = iterative(n);
    
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
let cache = {};
let recursive = (n) => {
    if (n <= 1) return n;

    if (!cache[n-1]) cache[n-1] = recursive(n-1);
    if (!cache[n-2]) cache[n-2] = recursive(n-2);

    return cache[n-1] + cache[n-2];
};

// https://leetcode.com/problems/fibonacci-number/discuss/215992/Java-Solutions
let iterative = (n) => {
    // Special cases
    if (n<2) return n;

    let a=0, b=1;

    for (let i=2; i<=n; i++) {
        let sum = a+b;
        a = b;
        b = sum;
    }

    return b
};

let inputs = [
    { n:0, output:0 },
    { n:1, output:1 },
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