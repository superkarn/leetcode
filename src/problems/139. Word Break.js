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
    // This regex is used to remove `_`
    let regexPlaceHolder = /_/ig;

    for (let i=0; i<wordDict.length; i++) {
        let s2 = s;
        for (let j=i; j<wordDict.length; j++) {
            let w = wordDict[j];

            // Set up Regular Expression to remove the word from the string
            let pattern = w;
            let regex = new RegExp(pattern, 'i');

            //console.log(`  ${i}: ${w}: ${regex}`);
            
            // If word is found, keep removing it from the string
            while (s2.indexOf(w) > -1) {
                //console.log(`    Removing ${w}`);
                s2 = s2.replace(regex, '_');
            }
        }

        // If the string (without '_') is empty, return true
        // else continue to the next i loop
        if (s2.replace(regexPlaceHolder, '').length == 0) {
            return true;
        }
    }

    return false;
};

//let s = "leetcode", wordDict = ["leet","code"]; // true
//let s = "applepenapple", wordDict = ["apple","pen"]; // true
//let s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]; // false
//let s = "aaa", wordDict = ["aaa"]; // true
//let s = "aaa", wordDict = ["bbb"]; // false
//let s = "cars", wordDict = ["car","ca","rs"]; // true
//let s = "ccbb", wordDict = ["bc","cb"]; // false
let s = "ccaccc", wordDict = ["cc","ac"]; // true

let output = wordBreak(s, wordDict);