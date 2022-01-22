// https://leetcode.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s    :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp(s);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

let MAPPING = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// depth-first search
let dfs_cache = [];
let dfs = (s) => {
    return dfs_recursive(s, 0);
};
let dfs_recursive = (s, i=0) => {
    // Starting with 0 is invalid
    if (s[i] == '0') return 0;

    // i has to be within s
    if (i > s.length) return 0;

    // When i is at the end, there's only 1 possible path
    // (unless i is 0, but that's caught above)
    if (i == s.length) {
        dfs_cache[i] = 1;
        return 1;
    }

    // If the value is already cached, just use it
    if (dfs_cache[i]) return dfs_cache[i];

    // Can always take 1
    let result = dfs_recursive(s, i+1);

    // Can only take 2 if the number is between 10-26
    if ((s[i] == '1') ||
        (s[i] == '2' && '0123456'.indexOf(s[i+1])>-1)) {
        result += dfs_recursive(s, i+2);
    }

    console.log(`  cache[${i}] = ${result} from ${s.substring(i, s.length)}`);
    dfs_cache[i] = result;

    return result;
};

// dynamic programming, from left to right
let dp = (s) => {
    // Empty string
    if (!s || s.length == 0) {
        return 0;
    }

    // If the first letter starts with a 0, it's invalid
    // But the program is expecting 0
    if (s[0] == '0') {
        return 0;
    }

    // Keep track as we go, using 1-index, with 0th element to help make it easier
    let cache = new Array(s.length+1);    
    cache[0] = 1;
    cache[1] = s[0] == '0' ? 0 : 1;

    //console.log(`  cache[0] = ${cache[0]} `);
    //console.log(`  cache[1] = ${cache[1]} (${s[1-1]})`);
    for (let i=2; i<=s.length; i++) {
        // start off with 0
        cache[i] = 0;

        // 1-9; no new paths. so we keep the same count as i-1
        if (s[i-1] != '0') {
            cache[i] += cache[i-1];
        }

        // 10-26; extra paths, so we add the count from i-2
        if ((s[i-2] == '1') ||
            (s[i-2] == '2' && '0123456'.indexOf(s[i-1]) >-1)) {
            cache[i] += cache[i-2];
        }

        //console.log(`  cache[${i}] = ${cache[i]} (${s[i-1]})`);
    }

    // return the last one
    return cache[s.length];
};


let inputs = [
    { s:"12", output:2 },
    { s:"226", output:3 },
    { s:"0", output:0 },
    { s:"06", output:0 },
    { s:"11106", output:2 },
];

// Comparing scalar output
console.log(inputs.map(x => numDecodings(x.s) == x.output));