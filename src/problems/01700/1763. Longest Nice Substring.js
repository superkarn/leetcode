// https://leetcode.com/problems/longest-nice-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = slidingWindow(s);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// NOTE: this doesn't work for "HkhBubUYy"
// 1: Track which letters can be good (contains both upper and lower case).
// 2: Find the longest nice substring
let slidingWindow = (s) => {
    // 1
    let letters = getNiceLetters(s);

    // 2
    let l=0, r=0;
    let subStr = '';
    let maxSubStr = '';

    // Keep checking while maxSubStr is less than what's left to check
    while (r<s.length) {
        subStr = s.slice(l,r+1);
        //console.log(`  [${l},${r}] (${s[r]}): ${subStr}`);        

        // If the current letter is not nice, start the substring over with the next letter
        if (letters.indexOf(s[r].toLowerCase()) == -1) {
            l=r+1;
            r=r+1;
            continue;
        }
        

        // If the current substring is nice, track it
        if ((/^[a-z]*$/.test(s[r]) && subStr.indexOf(s[r].toUpperCase())>-1) ||
            (/^[A-Z]*$/.test(s[r]) && subStr.indexOf(s[r].toLowerCase())>-1)) {
            //console.log(`    Is a nice substring: ${/^[a-z]*$/.test(s[r])} && ${subStr.indexOf(s[r].toUpperCase())>-1}`);

            if (subStr.length > maxSubStr.length) {
                maxSubStr = subStr;
            }
        }

        // Add the next letter
        r++;
    }

    //console.log(letters);
    return maxSubStr;
};
// Returns an array of "nice" letters in lower case
let getNiceLetters = (s) => {
    let letters = {};

    // 1: set all lower cases to false
    for (let i=0; i<s.length; i++) {
        // If letter is lower case
        if (/^[a-z]*$/.test(s[i])) {
            letters[s[i]] = false;
        } 
    }

    // 2: set all upper cases to true if the lower case already exists
    for (let i=0; i<s.length; i++) {
        if (letters[s[i].toLowerCase()] != null) {
            if (/^[A-Z]*$/.test(s[i])) {
                letters[s[i].toLowerCase()] = true;
            } 
        }
    }

    // 3: Keep only characters that don't have both upper and lower cases
    for (let key in letters) {
        if (letters[key] != true) {
            delete letters[key];
        }
    }

    return Object.keys(letters);
};

let inputs = [
    { s:"YazaAay", output:"aAa" },
    { s:"wXYazaAay", output:"aAa" },
    { s:"Bb", output:"Bb" },
    { s:"c", output:"" },
    { s:"HkhBubUYy", output:"BubUYy" },
];

// Comparing scalar output
console.log(inputs.map(x => longestNiceSubstring(x.s) == x.output));