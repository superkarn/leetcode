// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);
    console.log(`t         :  ${t}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s, t);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// attempt1: sort, then compare
let bruteForce = (s,t) => {
    // If s and t aren't the same length, they can't be anagram
    if (s.length != t.length) return false;

    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    for (let i=0; i<s.length; i++) {
        //console.log(`${s[i]} vs ${t[i]}`);
        if (s[i] != t[i]) return false;
    }

    return true;
};

let inputs = [
    { s:"anagram", t:"nagaram", output:true },
    { s:"rat", t:"car", output:false },
];

// Comparing scalar output
console.log(inputs.map(x => isAnagram(x.s, x.t) == x.output));
