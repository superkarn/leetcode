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
    let result = dfs(s);
    
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


//let input = "12"; // 2
let input = "226"; // 3
//let input = "0"; // 0
//let input = "06"; // 0
//let input = '11106'; // 2

let output = numDecodings(input);