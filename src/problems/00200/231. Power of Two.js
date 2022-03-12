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
    let result = bruteForce2(n);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Keep dividing by 2 until you get to 1 or a non integer
// Using recursive
let bruteForce = (n) => {
    // Special cases
    if (n==1) return true;
    if (Number.isInteger(n)==false) return false;

    return bruteForce(n/2);
};

// Keep dividing by 2 until you get to 1 or a non integer
// Using loop
let bruteForce2 = (n) => {    
    while (Number.isInteger(n)) {
        if (n==1) return true;

        n = n/2;
    }

    return false;
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
    { n:1048576, output:true }, // 2^10
    { n:4294967295, output:false }, // 2^32 - 1
    { n:18446744073709551616, output:true }, // 2^64
    { n:1267650600228229401496703205376, output:true }, // 2^100
    
];

// Comparing scalar output
console.log(inputs.map(x => isPowerOfTwo(x.n) == x.output));

