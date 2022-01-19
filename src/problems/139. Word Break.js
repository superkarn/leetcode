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
    let result = dp(s, wordDict);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// This solution uses dynamic programming method.
// The Cache array is a 2D array of size s.length by s.length
// where [l,r] contains the answer whether or not 
// substring of s from l to r can be segmented into a 
// space-separated sequence of one or more dictionary words.
// The final answer is at [0, s.length-1].
//
// The algorithm builds the sub problems from substring of length
// 1, then 2, then 3, until s.length.  Each longer string
// can be determined using the shorter strings.
let dp = (s, wordDict) => {
    let cache = [];
    for (let i = 0; i<s.length; i++) {
        cache[i] = [];
        for (let j=0; j<s.length; j++) {
            cache[i][j] = null;
        }
    }

    // l = starting index in s
    // r = ending index in s
    // length = length of the substring to consider
    let length=1;
    let l=0;
    let r=l+length-1;

    //console.log(`Length: ${length}`);
    while (true && length<=s.length) {
        let currentSubstring = s.substring(l,r+1);

        // First check the full substring
        let currentResult = wordDict.indexOf(currentSubstring) > -1;

        // If the currentResult is not in the dictionary,
        // Check the previous sub-problems
        if (currentResult === false) {
            
            for (let l2=l+1; l2<=r; l2++) {
                let r2 = l2-1;
                //console.log(`    checking (${cache[l][r2]})[${l},${r2}] vs [${l2},${r}](${cache[l2][r]})`);
                currentResult = currentResult || (cache[l][r2] && cache[l2][r]);

                if (currentResult) {
                    break;
                }
            }
        }
        
        cache[l][r] = currentResult;
        //console.log(`    [${l},${r}] => ${currentSubstring} => ${cache[l][r]}`);

        // Go to the next length, reset l and r
        if (l == s.length-length) {
            length++;
            l = 0;
            r = l+length-1;
            //console.log(`Length: ${length}`);
            continue;
        }

        l++;
        r++;
    }

    return cache[0][s.length-1];
};
let print2DArray = (a) => {
    let result = '\r\n';
    for (let i = 0; i<a.length; i++) {
        result += a[i] + "\r\n";
    }
    return result;
};

let inputs = [
    { s:"leetcode", wordDict:["leet","code"], output:true },
    { s:"applepenapple", wordDict:["apple","pen"], output:true },
    { s:"iamace", wordDict:["a","ace","am","i",], output:true },
];

// Comparing scalar output
console.log(inputs.map(x => wordBreak(x.s, x.wordDict) == x.output));