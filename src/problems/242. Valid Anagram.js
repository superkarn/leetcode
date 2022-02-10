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
    let result = countFrequencies(s, t);
    
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

// Keep track of the frequencies of each letter in s,
// then compare to t
let countFrequencies = (s, t) => {
    let freq = {};

    // Count the frequencies in s
    for (let i=0; i<s.length; i++) {
        freq[s[i]] = 1 + (freq[s[i]] ? freq[s[i]] : 0);
    }
    
    // Decrement the frequencies from t
    for (let i=0; i<t.length; i++) {
        // If a letter in t is not in s, return false
        if (!freq[t[i]]) {
            //console.log(`t has '${t[i]}', but s doesn't`);
            return false;
        }

        freq[t[i]]--;

        // If any letter drops below 0, return false
        if (freq[t[i]] < 0) {
            //console.log(`t has too many '${t[i]}'`);
            return false;
        }
    }

    // Make sure all frequencies end up with 0
    for (let i in freq) {
        if (freq[i] != 0) {
            //console.log(`s has too many '${i}'`);
            return false;
        }
    }

    //console.table(freq);
    return true;
};

let inputs = [
    { s:"anagram", t:"nagaram", output:true },
    { s:"rat", t:"car", output:false },
    { s:"ab", t:"a", output:false },
];

// Comparing scalar output
console.log(inputs.map(x => isAnagram(x.s, x.t) == x.output));
