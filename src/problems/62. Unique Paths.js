// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`m         :  ${m}`);
    console.log(`n         :  ${n}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp(m, n);
    
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
let dp = (m, n) => {
    // a cache of m x n
    let cache = Array(m).fill(Array(n));

    // all the m x 1 are 1s
    for (let i_m=0; i_m<m; i_m++) {
        cache[i_m][0] = 1;
    }

    // all the 1 x n are 1s
    for (let i_n=0; i_n<n; i_n++) {
        cache[0][i_n] = 1;
    }

    for (let i_m=1; i_m<m; i_m++) {
        for (let i_n=1; i_n<n; i_n++) {
            cache[i_m][i_n] = cache[i_m-1][i_n] + cache[i_m][i_n-1];
            //console.log(`[${i_m}][${i_n}] = ${cache[i_m][i_n]}`);
        }
    }

    return cache[m-1][n-1];
};

//let m = 3, n = 7; // 28
let m = 3, n = 2; // 3

let output = uniquePaths(m, n);