// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
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
    let curr = n;
    let cache = new Set();
    
    while (true) {
        if (cache.has(curr)) return false;

        // Track numbers we've already seen
        cache.add(curr);

        let digits = (curr+"").split('');
        curr = digits.reduce((prev, curr) => prev + curr*curr, 0);

        if (curr==1) return true;
    }

    throw new Error("Something went wrong");
};

let inputs = [
    { n:19, output:true },
    { n:2, output:false },
];

// Comparing scalar output
console.log(inputs.map(x => isHappy(x.n) == x.output));

