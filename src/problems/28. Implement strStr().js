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
    if (needle == '') return 0;
    if (needle.length > haystack.length) return -1;

    for (let i=0; i<haystack.length-needle.length+1; i++) {
        let goToNextI = false;
        //console.log(`  ${i}`);
        for (let j=0; j<needle.length && !goToNextI; j++) {
            if (haystack[i+j] != needle[j]) {
                //console.log(`    [${i+j}] (${haystack[i+j]}) != (${needle[j]}), go to next i`);
                goToNextI = true;
                break;
            }
        }

        if (!goToNextI) {
            console.log(`    found it at ${i}`);
            return i;
        }
    }

    // Not found
    return -1;
};

//let haystack = "hello", needle = "ll"; // 2
//let haystack = "aaaaa", needle = "bba"; // -1
//let haystack = "", needle = ""; // 0
let haystack = "hello world!", needle = "o w"; // 4

let output = strStr(haystack, needle);