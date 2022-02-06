// https://leetcode.com/problems/longest-repeating-character-replacement/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);
    console.log(`k         :  ${k}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s, k);
    
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
let bruteForce = (s, k) => {
    let result = s;

    return result;
};

let inputs = [
    { s:'ABAB', k:2, output:4 },
    { s:'AABABBA', k:1, output:4 },
];

// Comparing scalar output
console.log(inputs.map(x => characterReplacement(x.s, x.k) == x.output));
