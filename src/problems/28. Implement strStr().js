// https://leetcode.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`haystack   :  ${haystack}`);
    console.log(`needle     :  ${needle}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(haystack, needle);
    
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
let bruteForce = (haystack, needle) => {
    
};

let haystack = "hello", needle = "ll"; // 2
//let haystack = "aaaaa", needle = "bba"; // -1
//let haystack = "", needle = ""; // 0

let output = strStr(haystack, needle);