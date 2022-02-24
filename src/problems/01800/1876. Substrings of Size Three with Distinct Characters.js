// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s);
    
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
let bruteForce = (s) => {
    let result = s;

    return result;
};

let inputs = [
    { s:"xyzzaz", output:1 },
    { s:"aababcabc", output:4 },
];

// Comparing scalar output
console.log(inputs.map(x => countGoodSubstrings(x.s) == x.output));
