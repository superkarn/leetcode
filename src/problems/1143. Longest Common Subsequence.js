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
    let t1 = [], t2 = [];
    let r1 = [], r2 = [];

    // convert strings to array for ease of manipulation
    let a1 = [...text1];
    let a2 = [...text2];

    // Remove characters not in both
    for (let i=0; i<a1.length; i++) {
        let c = a1[i];

        let j = a2.indexOf(c);

        // If the character at i is in both, add to t1, t2
        if (j > -1) {
            t1[i] = c;
            t2[j] = c;
        } else {
            //console.log(`    SKIP: ${c} is not in text2`);
        }

        // Remove c
        a1[i] = '';
        a2[j] = '';
    }

    // Trim t1, t2
    t1 = t1.filter(x => x);
    t2 = t2.filter(x => x);

    console.log(`t1: ${t1}`);
    console.log(`t2: ${t2}`);

    for (let i=0; i<t1.length; i++) {
        // c is guaranteed to be in the right order in text1
        let c = t1[i];

        let j = t2.indexOf(c);

        // If c is not in text2, skip
        if (j == -1) {
            console.log(`    SKIP: ${c} is not in text2`);
            continue;
        }

        // If c is not in the right order in text2, skip
        if (j < r2.length-1) {
            console.log(`    SKIP: ${c} is not in the right order in ${t2}`);
            continue;
        }

        // Add c to t1 and t2
        r1[i] = c;
        r2[j] = c;

        console.log(`    ADD: ${c} at ${j}`);
        
        console.log(`    t1: ${t1}`);
        console.log(`    t2: ${t2}`);
    }

    // Trim t1
    return r1.filter(x => x).length;
};

//let text1 = "abcde", text2 = "ace"; // 3
//let text1 = "abc", text2 = "abc"; // 3
//let text1 = "abc", text2 = "def"; // 0
//let text1 = "abcde", text2 = "aec"; // 2
//let text1 = "bsbininm", text2 = "jmjkbkjkv"; // 1
let text1 = "oxcpqrsvwf", text2 = "shmtulqrypy"; // 2

let output = longestCommonSubsequence(text1, text2);