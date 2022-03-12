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
    let result = lookUpTable(n);
    
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

// Use log
let log2 = (n) => {    
    return Number.isInteger(Math.log2(n));
};

// Many solutions from
// https://leetcode.com/problems/power-of-two/discuss/63966/4-different-ways-to-solve-Iterative-Recursive-Bit-operation-Math
let math = (n) => {
    let two30 = Math.pow(2, 30); // Increase this to cover the input space
    return n > 0 && (two30 % n == 0);
};
let bitOperation = (n) => {
    return n > 0 && ((n & (n-1)) == 0);
};
let lookUpTable = (n) => {
    let table = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608,16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 10737418246];
    return table.indexOf(n) > -1;
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
    { n:1048576, output:true }, // 2^20
    { n:4294967295, output:false }, // 2^32 - 1

    // These test cases are beyond the input space of (2^31)-1
    { n:18446744073709551616, output:true }, // 2^64
    { n:1267650600228229401496703205376, output:true }, // 2^100
    
];

// Comparing scalar output
console.log(inputs.map(x => isPowerOfTwo(x.n) == x.output));

