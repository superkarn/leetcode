// https://leetcode.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);
    console.log(`wordDict  :  ${wordDict}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s, wordDict);
    
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
let bruteForce = (s, wordDict) => {
    let result = s;

    return result;
};

let inputs = [
    { s:"leetcode", wordDict:["leet","code"], output:true },
    { s:"applepenapple", wordDict:["apple","pen"], output:true },
];

// Comparing scalar output
console.log(inputs.map(x => wordBreak(x.s, x.wordDict) == x.output));