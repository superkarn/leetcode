// https://leetcode.com/problems/longest-common-subsequence/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`text1     :  ${text1}`);
    console.log(`text2     :  ${text2}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(text1, text2);
    
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
let bruteForce = (text1, text2) => {

};

let text1 = "abcde", text2 = "ace"; // 3
//let text1 = "abc", text2 = "abc"; // 3
//let text1 = "abc", text2 = "def"; // 0

let output = longestCommonSubsequence(input);