// https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`n         :  ${n}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(n);
    
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
let bruteForce = (n) => {
    let result = n;

    return result;
};

let inputs = [
    { n:1, output:true },
    { n:2, output:true },
    { n:3, output:false },
    { n:4, output:true },
    { n:5, output:false },
    { n:8, output:true },
    { n:16, output:true },
    { n:32, output:true },
];

// Comparing scalar output
console.log(inputs.map(x => isPowerOfTwo(x.n) == x.output));

