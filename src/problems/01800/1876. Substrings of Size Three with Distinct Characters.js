// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = slidingWindow3(s);
    
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
let slidingWindow = (s) => {
    let TARGET_LENGTH = 3;
    let distinctCount = 0;
    let window = [];

    for (let i=0; i<s.length; i++) {
        //console.log(`i:${i} ${s[i]}, set:${window}`);

        // For the first TARGET_LENGTH, don't do anything else
        if (i < TARGET_LENGTH) {
            // Add the new character
            window.push(s[i]);
            
            // If  set size is the same as TARGET_LENGTH, increment count
            if ((new Set(window).size) == TARGET_LENGTH) {
                //console.log(`      found ${s.slice(i-TARGET_LENGTH+1, i+1)}`);
                distinctCount++;
            }
            continue;
        }

        // Remove the first entry
        window.shift();

        // Then add the next entry
        window.push(s[i]);
        //console.log(`    deleted ${s[i-TARGET_LENGTH]}, added ${s[i]}, set:${window}`);

        // If  set size is the same as TARGET_LENGTH, increment count
        if ((new Set(window).size) == TARGET_LENGTH) {
            //console.log(`      found ${s.slice(i-TARGET_LENGTH+1, i+1)}`);
            distinctCount++;
        }
    };

    return distinctCount;
};

// attempt1: better sliding windows
let slidingWindow2 = (s) => {
    let TARGET_LENGTH = 3;

    // Special cases
    if (s.length < TARGET_LENGTH) return 0;

    let distinctCount = 0;

    // Check the first TARGET_LENGTH characters
    let window = s.slice(0, TARGET_LENGTH).split('');    
    if ((new Set(window).size) == TARGET_LENGTH) {
        distinctCount++;
    }

    // Then use sliding windows for the rest
    for (let i=TARGET_LENGTH; i<s.length; i++) {
        // Remove the first entry
        window.shift();

        // Then add the next entry
        window.push(s[i]);

        // If  set size is the same as TARGET_LENGTH, increment count
        if ((new Set(window).size) == TARGET_LENGTH) {
            distinctCount++;
        }
    };

    return distinctCount;
};

// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/discuss/1238721/Java-5-liner-O(n)
// Check i-1, i, i+1
let slidingWindow3 = (s) => {
    let distinctCount = 0;

    for (let i=1; i<s.length-1; i++) {
        if (s[i-1] != s[i] &&
            s[i]   != s[i+1] &&
            s[i+1] != s[i-1]) {
                distinctCount++;
            }
    }

    return distinctCount;
};

let inputs = [
    { s:"", output:0 },
    { s:"xyzzaz", output:1 },
    { s:"aababcabc", output:4 },
    { s:"aababcabcaa", output:5 },
];

// Comparing scalar output
console.log(inputs.map(x => countGoodSubstrings(x.s) == x.output));
