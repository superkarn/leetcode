// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s);
    
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
let bruteForce = (s) => {
    // Special cases
    if (!s) return 0;
    if (s.length == 0) return 0;
    if (s.length == 1) return 1;

    let l = 0;
    let r = 1;
    let maxLength = 0;
    
    while (r < s.length) {
        let sub = s.substring(l,r);
        //console.log(`  (${l},${r}) -> ${sub}`);

        // If the new char s[r] is already in the current substring, 
        // then it's a repeating char.  We move l up.
        // Can be optimized by moving l up to the last indexOf +1
        if (sub.indexOf(s[r]) > -1) {
            //console.log(`    sub.indexOf(${s[r]}): ${sub.indexOf(s[r])}`);
            l++;
        }
        // else it's not a repeating char.  We move r up 1, and check maxLength
        else {
            maxLength = Math.max(maxLength, r-l+1);
            //console.log(`    maxLength: ${maxLength}`);
            r++;
        }
    }

    return maxLength;
};

let inputs = [
    { s:"abcabcbb", output:3 },
    { s:"a", output:1 },
    { s:"bbbbb", output:1 },
    { s:"pwwkew", output:3 },
    { s:"au", output:2 },
];

// Comparing scalar output
console.log(inputs.map(x => lengthOfLongestSubstring(x.s) == x.output));