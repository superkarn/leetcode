// https://leetcode.com/problems/longest-repeating-character-replacement/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);
    console.log(`k         :  ${k}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = slidingWindow(s, k);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Use sliding window
// https://www.youtube.com/watch?v=gqXU1UyA8pk
let slidingWindow = (s, k) => {
    let result = 0;

    // This stores the count of each letter in the current substring
    let letterCount = {};
    let maxFrequency = 0;
    let l = 0;

    for (r=0; r<s.length; r++) {
        let subStringLength = r-l+1;
        //console.log(`----- ${s.substring(l,r+1)}, length: ${subStringLength}`);

        letterCount[s[r]] = 1 + (letterCount[s[r]] ? letterCount[s[r]] : 0);
        //console.log(`    new letter s[${r}] (${s[r]}) -> ${letterCount[s[r]]}`);
    
        maxFrequency = Math.max(maxFrequency, letterCount[s[r]]);

        //console.log(`    ${subStringLength} - ${maxFrequency} > ${k}`);
        // While we do not have enough substitution for the current string to become single char,
        // move the left side up
        while (subStringLength - maxFrequency > k) {
            letterCount[s[l]]--;
            l++;            
            subStringLength = r-l+1;
            //console.log(`    moved left to ${l}`);
        }

        result = Math.max(result, subStringLength);
        //console.log(`    maxFrequency = ${maxFrequency}, result = ${result}`);
    }
    
    //console.table(letterCount);

    return result;
};

let inputs = [
    { s:'ABAB', k:2, output:4 },
    { s:'AABABBA', k:1, output:4 },
];

// Comparing scalar output
console.log(inputs.map(x => characterReplacement(x.s, x.k) == x.output));
